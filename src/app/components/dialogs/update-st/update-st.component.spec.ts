import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStComponent } from './update-st.component';

describe('UpdateStComponent', () => {
  let component: UpdateStComponent;
  let fixture: ComponentFixture<UpdateStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
