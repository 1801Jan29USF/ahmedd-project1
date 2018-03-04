import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFilterTicketsComponent } from './manager-filter-tickets.component';

describe('ManagerFilterTicketsComponent', () => {
  let component: ManagerFilterTicketsComponent;
  let fixture: ComponentFixture<ManagerFilterTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerFilterTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerFilterTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
