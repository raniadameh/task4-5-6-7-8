import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { InputBase } from './input-base';
import { TextBoxService } from "./text-box";

@Injectable({
  providedIn: 'root'
})
export class UpdatePostService {

  constructor() { }
  getQuestions(viewPost: Post): InputBase<any>[] {
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
