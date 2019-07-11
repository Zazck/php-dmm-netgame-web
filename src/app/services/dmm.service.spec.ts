import { TestBed } from '@angular/core/testing';

import { DmmService } from './dmm.service';

describe('DmmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmmService = TestBed.get(DmmService);
    expect(service).toBeTruthy();
  });
});
