import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserPostsService } from './user-posts.service';
import { Post, PostCreate, PostPreview } from '../models/post.model';
import { List } from '../models/user.model';
import { identifierName } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

describe('UserPostsService', () => {
  let service: UserPostsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserPostsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getPostsById() should send a request to get a list of posts by user id', () => {
    const posts: List<PostPreview> = {
      data: [{
        id: '1111',
        text: 'hello ',
        image: 'image',
        likes: 1,
        tags: ['send', 'send'],
        publishDate: 'la',
        owner: { id: 'someId', title: 'a', firstName: 'a', lastName: 'a', picture: 'a' }
      }],
      total: 1,
      page: 1,
      limit: 10,
    };
    const id = 'someId';
    service.getPostsId(posts.data[0].id).subscribe(response => expect(response).toEqual(posts));
    const req = httpTestingController.expectOne(`${service.baseURL}/user/${posts.data[0].id}/post`);
    expect(req.request.method).toEqual('GET');
    req.flush(posts);
  });
  it('createPost() should send a request to create a Post', () => {
    const payload: PostCreate = {
      text: 'hello ',
      image: 'image',
      likes: 1,
      tags: ['send', 'send'],
      owner: 'some id'
    };
    const post: Post = {
      id: '1111',
      text: 'hello ',
      image: 'image',
      likes: 1,
      tags: ['send', 'send'],
      publishDate: 'la',
      owner: { id: 'someId', title: 'a', firstName: 'a', lastName: 'a', picture: 'a' },
      link: ''
    };
    service.createPost(payload).subscribe(res => expect(res).toEqual(post));
    const requests = httpTestingController.match(`${service.baseURL}/post/create`);
    expect(requests.length).toEqual(1);
    expect(requests[0].request.method).toEqual('POST');
    expect(requests[0].request.body).toEqual(payload);
    requests[0].flush(post);
  });
  it('deletePost() should send a request to delete post by id', () => {
    const post: any = {
      id: '1111',
      text: 'hello ',
      image: 'image',
      likes: 1,
      tags: ['send', 'send'],
      publishDate: 'la',
      owner: { id: 'someId', title: 'a', firstName: 'a', lastName: 'a', picture: 'a' },
      link: ''
    };
    service.deletePost(post.id).subscribe(response => { expect(response).toEqual(post) });
    const req = httpTestingController.expectOne(`${service.baseURL}/post/${post.id}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(post);
  });
  it('updatePost() should send a request to update post by id, payload', () => {
    const payload: any = {
      text: 'hello ',
      image: 'image',
      likes: 1,
      tags: ['send', 'send'],
      owner: 'some id'
    };
    const post: Post = {
      id: '1111',
      text: 'hello ',
      image: 'image',
      likes: 1,
      tags: ['send', 'send'],
      publishDate: 'la',
      owner: { id: 'someId', title: 'a', firstName: 'a', lastName: 'a', picture: 'a' },
      link: ''
    };
    service.updatePost(post.id, payload).subscribe(res => expect(res).toEqual(post));
    const requests = httpTestingController.match(`${service.baseURL}/post/${post.id}`);
    expect(requests[0].request.method).toEqual('PUT');
    expect(requests[0].request.body).toEqual(payload);
    requests[0].flush(post);
  });
  it('getmyPost() should send a request to get a post by post id', () => {
    const post: Post = {
      id: '1111',
      text: 'hello ',
      image: 'image',
      likes: 1,
      tags: ['send', 'send'],
      publishDate: 'la',
      owner: { id: 'someId', title: 'a', firstName: 'a', lastName: 'a', picture: 'a' },
      link: ''
    };
    const id = 'someId';
    service.getmyPost(id).subscribe(response => expect(response).toEqual(post));
    const req = httpTestingController.expectOne(`${service.baseURL}/post/${id}?created=1`);
    expect(req.request.method).toEqual('GET');
    req.flush(post);
  });
});
