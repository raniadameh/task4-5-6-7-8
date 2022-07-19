import { Injectable } from '@angular/core';
import { UserFull } from 'src/app/models/user.model';
import { InputBase } from './input-base';
import { TextBoxComponent } from './text-box/text-box.component';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor() { }
  getQuestions(userview: UserFull): InputBase<any>[] {
    const inputs = [
      new TextBoxComponent({
        key: 'owner',
        value: userview.firstName + ' ' + userview.lastName,
        label: 'Owner name',
        validation: {},
        type: 'text',
        order: 1,
      }),
      new TextBoxComponent({
        key: 'post',
        value: '',
        label: 'Post text',
        validation: { required: true, minLength: 6 },
        type: 'text',
        order: 2,
      }),
      new TextBoxComponent({
        key: 'image',
        value: '',
        label: 'Enter Image',
        validation: { required: true },
        type: 'url',
        order: 3,
      }),
      new TextBoxComponent({
        key: 'like',
        value: '0',
        label: 'Likes',
        validation: { min: '0' },
        type: 'number',
        order: 4,
      }),
    ];
    return inputs;
  }
}
