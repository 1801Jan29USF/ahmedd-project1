import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewTicketComponent } from './manager-view-ticket.component';

describe('ManagerViewTicketComponent', () => {
  let component: ManagerViewTicketComponent;
  let fixture: ComponentFixture<ManagerViewTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerViewTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerViewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
