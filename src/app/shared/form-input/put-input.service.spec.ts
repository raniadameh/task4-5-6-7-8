import { TestBed } from '@angular/core/testing';
import { Post } from 'src/app/models/post.model';
import { UserFull, UserPreview } from 'src/app/models/user.model';
import { DropdownService } from './dropdown';
import { InputBase } from './input-base';
import { PutInputService } from './put-input.service';
import { TextBoxService } from './text-box';

describe('PutInputService', () => {
  let service: PutInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutInputService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('createUserInput() should return Inputs array form ', () => {
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
    const returnedValue = service.createUserInput();
    expect(returnedValue).toEqual(inputs)
    expect(returnedValue.length).toEqual(3)
  });
  it('updateUserInput() take userFull and return Inputs array form ', () => {
    const user: UserFull = {
      title: 'title',
      firstName: 'fn',
      lastName: 'ln',
      gender: 'male',
      email: 'email@gmail.com',
      phone: '1234',
      picture: 'hii',
      id: '',
      dateOfBirth: '',
      registerDate: '',
      location: undefined
    }
    const inputs = [
      new TextBoxService({
        key: 'firstName',
        value: user?.firstName,
        label: 'Enter First Name',
        validation: { required: true, minLength: 2 },
        type: 'text',
        order: 1,
      }),
      new TextBoxService({
        key: 'lastName',
        value: user?.lastName,
        label: 'Enter Last Name',
        validation: { required: true, minLength: 2 },
        type: 'text',
        order: 2,
      }),
      new TextBoxService({
        key: 'email',
        value: user?.email,
        label: 'Enter email',
        validation: { required: true },
        type: 'email',
        order: 3,
      }),
      new DropdownService({
        key: 'title',
        label: 'Title',
        value: user?.title,
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
        value: user?.gender,
        options: [
          { key: 'male', value: 'male' },
          { key: 'female', value: 'female' },
          { key: 'others', value: 'others' },
        ],
        order: 5,
      }),
      new TextBoxService({
        key: 'phone',
        value: user?.phone,
        label: 'Enter phone',
        type: 'number',
        order: 6,
      }),
    ];
    const returnedValue = service.updateUserInput(user);
    expect(returnedValue).toEqual(inputs)
  });
  it('createPostInput() take userFull and return Inputs array form ', () => {
    const user: UserFull = {
      title: 'title',
      firstName: 'fn',
      lastName: 'ln',
      gender: 'male',
      email: 'email@gmail.com',
      phone: '1234',
      picture: 'hii',
      id: '',
      dateOfBirth: '',
      registerDate: '',
      location: undefined
    }
    const inputs = [
      new TextBoxService({
        key: 'owner',
        value: user.firstName + ' ' + user.lastName,
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
    const returnedValue = service.createPostInput(user);
    expect(returnedValue).toEqual(inputs)
  });
  it('updatePostInput() take Post and return Inputs array form ', () => {
    const viewPost: Post = {
      id: '',
      text: '',
      image: '',
      likes: 0,
      link: '',
      tags: [],
      publishDate: '',
      owner: {
        id: '',
        title: '',
        firstName: '',
        lastName: '',
        picture: ''
      }
    }
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
    const returnedValue = service.updatePostInput(viewPost);
    expect(returnedValue).toEqual(inputs);

  });


});
