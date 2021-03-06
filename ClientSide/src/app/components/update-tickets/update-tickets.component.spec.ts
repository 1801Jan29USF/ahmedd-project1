import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTicketsComponent } from './update-tickets.component';

describe('UpdateTicketsComponent', () => {
  let component: UpdateTicketsComponent;
  let fixture: ComponentFixture<UpdateTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
