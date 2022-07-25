import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateUpdatePostComponent } from './create-update-post.component';

describe('CreateUpdatePostComponent', () => {
  let component: CreateUpdatePostComponent;
  let fixture: ComponentFixture<CreateUpdatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpdatePostComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateUpdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
