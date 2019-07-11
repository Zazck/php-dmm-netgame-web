import { Component, OnInit, Input } from '@angular/core';
import { IGameInfo } from 'src/app/types/dmm';
import { Params } from '@angular/router';

@Component({
  selector: 'app-game-info-list',
  templateUrl: './game-info-list.component.html',
  styleUrls: ['./game-info-list.component.sass'],
})
export class GameInfoListComponent implements OnInit {

  @Input() list: IGameInfo[] = [];
  @Input() category: 'general' | 'adult' = 'general';

  constructor() { }

  ngOnInit() {
  }

  getQueryParamsFrom(info: IGameInfo): Params {
    return {
      category: this.category,
      name: info.name,
    };
  }

  public getThumb(info: IGameInfo) {
    return {
      'background-image': `url(https://img-freegames.dmm.com/app/${info.thumb}/details/pic_thmb.jpg)`,
    };
  }
}
