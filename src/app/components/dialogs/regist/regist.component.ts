import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DmmService } from 'src/app/services/dmm.service';
import { Router } from '@angular/router';
import { IRegistPayload } from 'src/app/types/dmm';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import * as Moment from 'moment';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.sass', '../dialog.sass'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' },

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class RegistComponent implements OnInit {
  public readonly nickNameList = [
    '提督', '審神者', '親方', '社長', '王子', '城主', 'プロデューサー', '首領', '店長', '千雪',
    '結城', '山田', '田中', '紅雪', '小春凪', 'なつひめ', 'みさか白鳳', 'てまり姫', '早生あかつき',
    'ゆかりん', 'かおりん', 'あーみん', 'まりあ', 'ことり', 'ゆっきー', 'みいにゃん', 'あやきち', 'つぐつぐ', 'みゆ',
    '十六夜', '琥珀', '月輝夜姫', '都椿姫', '百日紅', '花螺李', '濡烏', '王鈴', '秋茜', '姫星紅',
    '龍眼', '黒の剣士', '自宅警備員', '星の王子様', 'マルク', 'カメバズーカ', 'アルパカ', 'ペンギン', 'ロキ', 'ムスカ',
    'シルキー', '月の住人', 'ホワイトライオン', '覇王', '仙人掌', 'しらゆき', 'なぎ', 'はづき', 'ハラショー', 'ハーゲンティ',
    'ムルムル', '黒い天使', 'レリエル', 'ルベライト', '赤虎眼石', 'きたかみ', 'さしゃ', 'ななみつき', 'はやて', '北斗',
    'クレド', 'カノン', 'ねむのき',
  ];
  public minDate = new Date(1900, 0, 1);
  public maxDate = new Date(new Date().getFullYear() - 18, 11, 31);
  public birthday: Moment.Moment = Moment(new Date(new Date().getFullYear() - 18, 0, 1));
  public nickname = this.nickNameList[Math.floor(Math.random() * this.nickNameList.length)];
  public gender: 'male' | 'female' = 'male';
  public isGeneralChecked = true;
  public isAdultChecked = false;

  public requesting: boolean = false;

  constructor(
    private dmm: DmmService,
    private dialogRef: MatDialogRef<RegistComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit() {
  }

  back(): void {
    this.dialogRef.close();
    this.router.navigate(['/game-list']);
  }

  randomNickname() {
    this.nickname = this.nickNameList[Math.floor(Math.random() * this.nickNameList.length)];
  }

  async regist(): Promise<void> {
    this.requesting = true;
    const payload: IRegistPayload = {
      app_base: this.data,
      nickname: this.nickname,
      gender: this.gender,
      year: this.birthday.year().toString(),
      month: (this.birthday.month() + 1).toString().padStart(2, '0'),
      day: this.birthday.date().toString().padStart(2, '0'),
    };
    if (this.isGeneralChecked) {
      payload.isGeneralChecked = 'on';
    }
    if (this.isAdultChecked) {
      payload.isAdultChecked = 'on';
    }
    const response = await this.dmm.regist(payload);
    this.requesting = false;
    this.dialogRef.close(response);
  }
}
