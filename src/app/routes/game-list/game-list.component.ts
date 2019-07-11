import { GameListService } from './../../services/game-list.service';
import { SettingService } from './../../services/setting.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { IGameInfo } from 'src/app/types/dmm';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.sass'],
})
export class GameListComponent implements OnInit {
  public category: 0 | 1 = this.setting.category === 'exchange' ? 1 : 0;
  public gameCategory: 0 | 1 = this.category ? (this.setting.gameCategory === 'general' ? 0 : 1) : 0;
  public adultList: IGameInfo[] = [];
  public generalList: IGameInfo[] = [];

  constructor(
    private setting: SettingService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private gameList: GameListService,
  ) { }

  ngOnInit() {
    this.gameList.getList('general').then((list) => {
      for (let i = 0; i < list.length; i += 1) {
        const checked = {
          name: this.sanitizer.sanitize(SecurityContext.URL, list[i].name),
          title: list[i].title,
          comment: list[i].comment,
          thumb: this.sanitizer.sanitize(SecurityContext.URL, list[i].thumb),
        };
        this.generalList.push(checked);
      }
    });
    if (this.setting.category === 'exchange') {
      this.gameList.getList('adult').then((list) => {
        for (let i = 0; i < list.length; i += 1) {
          const checked = {
            name: this.sanitizer.sanitize(SecurityContext.URL, list[i].name),
            title: list[i].title,
            comment: list[i].comment,
            thumb: this.sanitizer.sanitize(SecurityContext.STYLE, list[i].thumb),
          };
          this.adultList.push(checked);
        }
      });
    }
  }

  public async run(name: string) {
    this.setting.game = name;
    this.setting.gameCategory = this.gameCategory ? 'adult' : 'general';
    this.router.navigate(
      ['/play'],
      {
        queryParams: {
          name,
          category: this.setting.gameCategory,
        },
      },
    );
  }
}
