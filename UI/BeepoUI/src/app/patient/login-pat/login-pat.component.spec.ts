import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPatComponent } from './login-pat.component';

describe('LoginPatComponent', () => {
  let component: LoginPatComponent;
  let fixture: ComponentFixture<LoginPatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
