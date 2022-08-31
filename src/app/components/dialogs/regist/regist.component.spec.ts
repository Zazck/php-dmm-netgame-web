import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegistComponent } from './regist.component';

describe('RegistComponent', () => {
  let component: RegistComponent;
  let fixture: ComponentFixture<RegistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
