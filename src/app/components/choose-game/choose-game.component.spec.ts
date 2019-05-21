import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGameComponent } from './choose-game.component';

describe('ChooseGameComponent', () => {
  let component: ChooseGameComponent;
  let fixture: ComponentFixture<ChooseGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
