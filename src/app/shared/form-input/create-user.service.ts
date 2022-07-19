import { Injectable } from '@angular/core';
import { InputBase } from './input-base';
import { TextBoxComponent } from './text-box/text-box.component';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor() { }
  getQuestions(): InputBase<any>[] {
    const inputs = [
      new TextBoxComponent({
        key: 'firstName',
        value: '',
        label: 'Enter First Name',
        validation: { required: true, minLength: 2 },
        type: 'text',
        order: 1,
      }),
      new TextBoxComponent({
        key: 'lastName',
        value: '',
        label: 'Enter Last Name',
        validation: { required: true, minLength: 2 },
        type: 'text',
        order: 2,
      }),
      new TextBoxComponent({
        key: 'email',
        value: '',
        label: 'Enter email',
        validation: { required: true },
        type: 'email',
        order: 3,
      }),
    ];
    return inputs;
  }
}
