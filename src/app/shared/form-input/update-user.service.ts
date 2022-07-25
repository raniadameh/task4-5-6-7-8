import { Injectable } from '@angular/core';
import { UserFull } from 'src/app/models/user.model';
import { DropdownService } from "./dropdown";
import { InputBase } from './input-base';
import { TextBoxService } from "./text-box";

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  viewid!: UserFull;
  constructor() { }
  getQuestions(viewid: UserFull): InputBase<any>[] {
    const inputs = [
      new TextBoxService({
        key: 'firstName',
        value: viewid?.firstName,
        label: 'Enter First Name',
        validation: { required: true, minLength: 2 },
        type: 'text',
        order: 1,
      }),
      new TextBoxService({
        key: 'lastName',
        value: viewid?.lastName,
        label: 'Enter Last Name',
        validation: { required: true, minLength: 2 },
        type: 'text',
        order: 2,
      }),
      new TextBoxService({
        key: 'email',
        value: viewid?.email,
        label: 'Enter email',
        validation: { required: true },
        type: 'email',
        order: 3,
      }),
      new DropdownService({
        key: 'title',
        label: 'Title',
        value: viewid?.title,
        options: [
          { key: 'mr', value: 'mr' },
          { key: 'ms', value: 'ms' },
          { key: 'mrs', value: 'mrs' },
          { key: 'miss', value: 'miss' },
          { key: 'dr', value: 'dr' },
          { key: '', value: '' }
        ],
        order: 4,
      }),
      new DropdownService({
        key: 'gender',
        label: 'Gender',
        value: viewid?.gender,
        options: [
          { key: 'male', value: 'male' },
          { key: 'female', value: 'female' },
          { key: 'others', value: 'others' },
        ],
        order: 5,
      }),
      new TextBoxService({
        key: 'phone',
        value: viewid?.phone,
        label: 'Enter phone',
        type: 'number',
        order: 6,
      }),
    ];
    return inputs;
  }
}
