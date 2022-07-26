import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { UserFull } from 'src/app/models/user.model';
import { DropdownService } from './dropdown';
import { InputBase } from './input-base';
import { TextBoxService } from './text-box';

@Injectable({
  providedIn: 'root'
})
export class PutInputService {

  constructor() { }
  createUserInput(): InputBase<any>[] {
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
  updateUserInput(userview: UserFull): InputBase<any>[] {
    const inputs = [
      new TextBoxService({
        key: 'firstName',
        value: userview?.firstName,
        label: 'Enter First Name',
        validation: { required: true, minLength: 2 },
        type: 'text',
        order: 1,
      }),
      new TextBoxService({
        key: 'lastName',
        value: userview?.lastName,
        label: 'Enter Last Name',
        validation: { required: true, minLength: 2 },
        type: 'text',
        order: 2,
      }),
      new TextBoxService({
        key: 'email',
        value: userview?.email,
        label: 'Enter email',
        validation: { required: true },
        type: 'email',
        order: 3,
      }),
      new DropdownService({
        key: 'title',
        label: 'Title',
        value: userview?.title,
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
        value: userview?.gender,
        options: [
          { key: 'male', value: 'male' },
          { key: 'female', value: 'female' },
          { key: 'others', value: 'others' },
        ],
        order: 5,
      }),
      new TextBoxService({
        key: 'phone',
        value: userview?.phone,
        label: 'Enter phone',
        type: 'number',
        order: 6,
      }),
    ];
    return inputs;
  }
  createPostInput(userview: UserFull): InputBase<any>[] {
    const inputs = [
      new TextBoxService({
        key: 'owner',
        value: userview.firstName + ' ' + userview.lastName,
        label: 'Owner name',
        validation: {},
        type: 'text',
        order: 1,
      }),
      new TextBoxService({
        key: 'post',
        value: '',
        label: 'Post text',
        validation: { required: true, minLength: 6 },
        type: 'text',
        order: 2,
      }),
      new TextBoxService({
        key: 'image',
        value: '',
        label: 'Enter Image',
        validation: { required: true },
        type: 'url',
        order: 3,
      }),
      new TextBoxService({
        key: 'like',
        value: '0',
        label: 'Likes',
        validation: { min: 0 },
        type: 'number',
        order: 4,
      }),
    ];
    return inputs;
  }
  updatePostInput(viewPost: Post): InputBase<any>[] {
    const inputs = [
      new TextBoxService({
        key: 'owner',
        value: viewPost.owner.firstName + ' ' + viewPost.owner.lastName,
        label: 'Owner name',
        validation: {},
        type: 'text',
        order: 1,
      }),
      new TextBoxService({
        key: 'post',
        value: viewPost.text,
        label: 'Post text',
        validation: { required: true, minLength: 6 },
        type: 'text',
        order: 2,
      }),
      new TextBoxService({
        key: 'image',
        value: viewPost.image,
        label: 'Enter Image',
        validation: { required: true },
        type: 'url',
        order: 3,
      }),
      new TextBoxService({
        key: 'likes',
        value: '' + viewPost.likes + '',
        label: 'Likes',
        validation: { min: 0 },
        type: 'number',
        order: 4,
      }),
    ];
    return inputs;
  }
}
