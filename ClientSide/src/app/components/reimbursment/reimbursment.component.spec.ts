import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursmentComponent } from './reimbursment.component';

describe('ReimbursmentComponent', () => {
  let component: ReimbursmentComponent;
  let fixture: ComponentFixture<ReimbursmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbursmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
