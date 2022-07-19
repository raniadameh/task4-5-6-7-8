import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { InputBase } from './input-base';
import { TextBoxComponent } from './text-box/text-box.component';

@Injectable({
  providedIn: 'root'
})
export class UpdatePostService {

  constructor() { }
  getQuestions(viewPost: Post): InputBase<any>[] {
    const inputs = [
      new TextBoxComponent({
        key: 'owner',
        value: viewPost.owner.firstName + ' ' + viewPost.owner.firstName,
        label: 'Owner name',
        validation: {},
        type: 'text',
        order: 1,
      }),
      new TextBoxComponent({
        key: 'post',
        value: viewPost.text,
        label: 'Post text',
        validation: { required: true, minLength: 6 },
        type: 'text',
        order: 2,
      }),
      new TextBoxComponent({
        key: 'image',
        value: viewPost.image,
        label: 'Enter Image',
        validation: { required: true },
        type: 'url',
        order: 3,
      }),
      new TextBoxComponent({
        key: 'likes',
        value: '' + viewPost.likes + '',
        label: 'Likes',
        validation: {},
        type: 'number',
        order: 4,
      }),
    ];
    return inputs;
  }
}
