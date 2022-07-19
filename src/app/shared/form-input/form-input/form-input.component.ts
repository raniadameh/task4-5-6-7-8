import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() input!: InputBase<any>;
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  get control() {
    return this.form.controls[this.input.key];
  }
}
