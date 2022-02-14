import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditApptComponent } from './add-edit-appt.component';

describe('AddEditApptComponent', () => {
  let component: AddEditApptComponent;
  let fixture: ComponentFixture<AddEditApptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditApptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
