import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { PlayGuard } from './play.guard';

describe('PlayGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayGuard]
    });
  });

  it('should ...', inject([PlayGuard], (guard: PlayGuard) => {
    expect(guard).toBeTruthy();
  }));
});
