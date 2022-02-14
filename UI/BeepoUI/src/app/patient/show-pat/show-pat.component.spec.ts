import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPatComponent } from './show-pat.component';

describe('ShowPatComponent', () => {
  let component: ShowPatComponent;
  let fixture: ComponentFixture<ShowPatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
