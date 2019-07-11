import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInfoListComponent } from './game-info-list.component';

describe('GameInfoListComponent', () => {
  let component: GameInfoListComponent;
  let fixture: ComponentFixture<GameInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameInfoListComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
