import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase } from './input-base';
import { InputGeneratorService } from './input-generator.service';
import { TextBoxService } from './text-box';

describe('InputGeneratorService', () => {
  let service: InputGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('generateValidators take input form  return validators', () => {
    const inputs: InputBase<any> = new TextBoxService({
      key: 'text',
      value: '',
      label: 'text',
      validation: { required: true, minLength: 2, },
      type: 'text',
      order: 1,
    });
    const returnedValue = service.generateValidators(inputs);
    expect(returnedValue.length).toEqual(2)
    const inputs2: InputBase<any> = new TextBoxService({
      key: 'number',
      value: '',
      label: 'number',
      validation: { min: 2, max: 10 },
      type: 'number',
      order: 1,
    });
    const returnedValue2 = service.generateValidators(inputs2);
    expect(returnedValue2.length).toEqual(2)
    //console.log(returnedValue.values)
  });
  it('generateFormControl take input form and return control', () => {
    const inputs: InputBase<any> = new TextBoxService({
      key: 'text',
      value: 'hi',
      label: 'text',
      validation: { required: true, minLength: 2, },
      type: 'text',
      order: 1,
    });
    const returnedValue = service.generateFormControl(inputs);
    expect(returnedValue.value).toEqual('hi');
  });
  it('generateFormGroup take input form array and return formGroup', () => {
    const inputs: InputBase<any>[] = [new TextBoxService({
      key: 'text',
      value: 'hi',
      validation: { required: true, minLength: 2, },
    })]
    const fg = new FormGroup({
      text: new FormControl('hi', [Validators.required, Validators.minLength(2),]),
    })
    const returnedValue = service.generateFormGroup(inputs);
    expect(returnedValue.value).toEqual(fg.value);
  });
});
