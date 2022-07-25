import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownService } from '../dropdown';
import { TextBoxService } from '../text-box';

import { FormInputComponent } from './form-input.component';

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormInputComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule,
        MatSelectModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormInputComponent);
    component = fixture.componentInstance;
    component.input = new TextBoxService({ key: 'test' });
    component.input = new DropdownService({ key: 'test' });
    component.form = new FormGroup({ test: new FormControl() }); fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
