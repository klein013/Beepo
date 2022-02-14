import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowApptComponent } from './show-appt.component';

describe('ShowApptComponent', () => {
  let component: ShowApptComponent;
  let fixture: ComponentFixture<ShowApptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowApptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
