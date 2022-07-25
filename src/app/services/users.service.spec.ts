import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { List, UserPreview, CreateUserModel, UserFull } from '../models/user.model';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getUsers() should send a request to get a list of users', () => {
    const usersList: List<UserPreview> = {
      data: [{
        id: '1234',
        title: 'test title',
        firstName: 'first name',
        lastName: 'last name',
        picture: 'some picture',
      }],
      total: 1,
      page: 1,
      limit: 10,
    };
    service.getUsers().subscribe(response => expect(response).toEqual(usersList));
    const req = httpTestingController.expectOne(`${service.baseURL}/user?created=1`);
    expect(req.request.method).toEqual('GET');
    req.flush(usersList);
  });
  it('createUser() should send a request to create a user', () => {
    const payload: CreateUserModel = {
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.com',
    };
    const response: UserFull = {
      id: '12345',
      title: 'Ms',
      firstName: 'tt',
      lastName: 'tt',
      gender: 'tt',
      email: 'tt',
      dateOfBirth: 'tt',
      registerDate: 'rr',
      phone: '12457',
      picture: 'some picture',
      location: {},
    };
    service.createUser(payload).subscribe(res => expect(res).toEqual(response));
    const requests = httpTestingController.match(`${service.baseURL}/user/create`);
    expect(requests.length).toEqual(1);
    expect(requests[0].request.method).toEqual('POST');
    expect(requests[0].request.body).toEqual(payload);
    requests[0].flush(response);
  });
  it('getUserId() should send a request to get user by id', () => {
    const user: UserFull = {
      id: '1234',
      title: 'test title',
      firstName: 'first name',
      lastName: 'last name',
      picture: 'some picture',
      gender: 'male',
      email: 'test@gmail.com',
      dateOfBirth: '',
      registerDate: '',
      phone: '',
      location: undefined
    };
    service.getUserId(user.id).subscribe(response => expect(response).toEqual(user));
    const req = httpTestingController.expectOne(`${service.baseURL}/user/${user.id}`);
    expect(req.request.method).toEqual('GET');
    req.flush(user);
  });
  it('deleteUser() should send a request to delete user by id', () => {
    const user: UserFull = {
      id: '1234',
      title: 'test title',
      firstName: 'first name',
      lastName: 'last name',
      picture: 'some picture',
      gender: 'male',
      email: 'test@gmail.com',
      dateOfBirth: '',
      registerDate: '',
      phone: '',
      location: undefined
    };
    service.deleteUser(user.id).subscribe(response => expect(response).toEqual(user));
    const req = httpTestingController.expectOne(`${service.baseURL}/user/${user.id}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(user);
  });
  it('updateUser() should send a request to update user by id, payload', () => {
    const payload = {
      firstName: 'test',
      lastName: 'test',
      gender: 'male',
    };
    const response: UserFull = {
      id: '12345',
      title: 'Ms',
      firstName: 'tt',
      lastName: 'tt',
      gender: 'tt',
      email: 'tt',
      dateOfBirth: 'tt',
      registerDate: 'rr',
      phone: '12457',
      picture: 'some picture',
      location: {},
    };
    service.updateUser(response.id, payload).subscribe(res => expect(res).toEqual(response));
    const requests = httpTestingController.match(`${service.baseURL}/user/${response.id}`);
    expect(requests[0].request.method).toEqual('PUT');
    expect(requests[0].request.body).toEqual(payload);
    requests[0].flush(response);
  });

});
