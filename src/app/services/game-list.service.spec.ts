import { TestBed } from '@angular/core/testing';

import { GameListService } from './game-list.service';

describe('GameListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameListService = TestBed.get(GameListService);
    expect(service).toBeTruthy();
  });
});
