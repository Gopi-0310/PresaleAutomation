import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPopupComponent } from './user-popup.component';

describe('UserPopupComponent', () => {
  let component: UserPopupComponent;
  let fixture: ComponentFixture<UserPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPopupComponent]
    });
    fixture = TestBed.createComponent(UserPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
