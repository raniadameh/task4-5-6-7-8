import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateUpdateUserReactiveComponent } from './create-update-user-reactive.component';

describe('CreateUpdateUserReactiveComponent', () => {
  let component: CreateUpdateUserReactiveComponent;
  let fixture: ComponentFixture<CreateUpdateUserReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpdateUserReactiveComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateUserReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
