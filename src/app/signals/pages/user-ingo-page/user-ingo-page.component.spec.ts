import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIngoPageComponent } from './user-ingo-page.component';

describe('UserIngoPageComponent', () => {
  let component: UserIngoPageComponent;
  let fixture: ComponentFixture<UserIngoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserIngoPageComponent]
    });
    fixture = TestBed.createComponent(UserIngoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
