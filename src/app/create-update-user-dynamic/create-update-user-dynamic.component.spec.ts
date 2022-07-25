import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FormInputComponent } from '../shared/form-input/form-input/form-input.component';

import { CreateUpdateUserDynamicComponent } from './create-update-user-dynamic.component';

describe('CreateUpdateUserDynamicComponent', () => {
  let component: CreateUpdateUserDynamicComponent;
  let fixture: ComponentFixture<CreateUpdateUserDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpdateUserDynamicComponent, FormInputComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule, MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSelectModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateUserDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
