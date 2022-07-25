import { Injectable } from '@angular/core';
import { InputBase } from './input-base';
import { TextBoxService } from "./text-box";

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor() { }
  getQuestions(): InputBase<any>[] {
    const inputs = [
      new TextBoxService({
        key: 'firstName',
        value: '',
        label: 'Enter First Name',
        validation: { required: true, minLength: 2 },
        type: 'text',
        order: 1,
      }),
      new TextBoxService({
        key: 'lastName',
        value: '',
        label: 'Enter Last Name',
        validation: { required: true, minLength: 2 },
        type: 'text',
        order: 2,
      }),
      new TextBoxService({
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
