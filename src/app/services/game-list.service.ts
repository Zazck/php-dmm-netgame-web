import { IGameInfo } from '../types/dmm';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameListService {
  private lists = {
    general: [] as IGameInfo[],
    adult: [] as IGameInfo[],
  };
  public async getList(category: 'general' | 'adult'): Promise<IGameInfo[]> {
    if (this.lists[category].length === 0) {
      const response = await fetch(`/assets/${category}.json`)
        .catch(_ => new Response('[]'));
      this.lists[category] = <IGameInfo[]>await response.json();
    }
    return this.lists[category];
  }
  constructor() { }
}
