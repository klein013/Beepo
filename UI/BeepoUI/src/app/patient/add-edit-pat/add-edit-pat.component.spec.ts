import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPatComponent } from './add-edit-pat.component';

describe('AddEditPatComponent', () => {
  let component: AddEditPatComponent;
  let fixture: ComponentFixture<AddEditPatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
