import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTournamentsComponent } from './your-tournaments.component';

describe('YourTournamentsComponent', () => {
  let component: YourTournamentsComponent;
  let fixture: ComponentFixture<YourTournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
