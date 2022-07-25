import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CreateUpdateComponent } from './create-update.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CreateUpdateComponent', () => {
  let component: CreateUpdateComponent;
  let fixture: ComponentFixture<CreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpdateComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, FormsModule]

    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
