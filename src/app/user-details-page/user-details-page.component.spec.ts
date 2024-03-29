import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserDetailsPageComponent } from './user-details-page.component';

describe('UserDetailsPageComponent', () => {
  let component: UserDetailsPageComponent;
  let fixture: ComponentFixture<UserDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsPageComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
