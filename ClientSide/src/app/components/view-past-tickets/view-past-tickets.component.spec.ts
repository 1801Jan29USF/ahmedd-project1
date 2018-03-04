import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastTicketsComponent } from './view-past-tickets.component';

describe('ViewPastTicketsComponent', () => {
  let component: ViewPastTicketsComponent;
  let fixture: ComponentFixture<ViewPastTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPastTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPastTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
