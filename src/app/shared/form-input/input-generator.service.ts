import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { InputBase } from './input-base';

@Injectable({
  providedIn: 'root'
})
export class InputGeneratorService {

  constructor() { }

  generateValidators(input: InputBase<any>): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (input.validation?.['required']) {
      validators.push(Validators.required)
    }
    if (input.type === 'email') {
      validators.push(Validators.email)
    }
    /*     if (input.controlType === 'text-box') {
          validators.push(Validators.maxLength(256))
        } */
    if (input.validation?.['minLength']) {
      validators.push(Validators.minLength(input.validation['minLength']))
    }
    if (input.validation?.['min']) {
      validators.push(Validators.min(input.validation['min']))
    }
    if (input.validation?.['max']) {
      validators.push(Validators.max(input.validation['max']))
    }
    return validators;

  }
  generateFormControl(input: InputBase<any>): FormControl {
    return new FormControl(input.value || '', this.generateValidators(input))
  }
  generateFormGroup(inputs: InputBase<any>[]): FormGroup {
    const group: any = {};
    inputs.forEach(input => {
      group[input.key] = this.generateFormControl(input);
    });
    return new FormGroup(group);
  }

}
