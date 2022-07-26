import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Directive, HostListener, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { List, UserFull, UserPreview } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { of } from 'rxjs';
import { UsersPageComponent } from './users-page.component';
import { query } from '@angular/animations';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;
  let stubUserService: jasmine.SpyObj<UsersService>
  let routerSpy: jasmine.SpyObj<Router>
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
  beforeEach(async () => {
    stubUserService = jasmine.createSpyObj('UsersService', ['createUser', 'deleteUser', 'updateUser', 'getUsers', 'getUserId', 'goToUserDetails'])
    //routerSpy = jasmine.createSpyObj('Router', ['navigate'])
    await TestBed.configureTestingModule({
      declarations: [UsersPageComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: UsersService, useValue: stubUserService },
        //{ provide: Router, useValue: routerSpy }
      ],
      //schemas: [NO_ERRORS_SCHEMA]

    })
      .compileComponents();

    fixture = TestBed.createComponent(UsersPageComponent);
    stubUserService.getUsers.and.returnValue(of(usersList));
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getUsers() should return list of users', () => {
    component.getUsers();
    expect(stubUserService.getUsers).toHaveBeenCalled();
    fixture.detectChanges();
    expect(component.view).toEqual(usersList)
  });
  it('getUserId() should return user by id', () => {
    const id = '1234';
    const userFull: UserFull = {
      id: '1234',
      title: 'test title',
      firstName: 'first name',
      lastName: 'last name',
      picture: 'some picture',
      gender: '',
      email: '',
      dateOfBirth: '',
      registerDate: '',
      phone: '',
      location: undefined
    }
    stubUserService.getUserId.and.returnValue(of(userFull))
    component.getUserId(id);
    expect(stubUserService.getUserId).toHaveBeenCalled();
    fixture.detectChanges();
    expect(component.viewid).toEqual(userFull)
  });
  it('deleteUser() should delete user', () => {
    const id = '1234';
    const userFull: UserFull = {
      id: '1234',
      title: 'test title',
      firstName: 'first name',
      lastName: 'last name',
      picture: 'some picture',
      gender: '',
      email: '',
      dateOfBirth: '',
      registerDate: '',
      phone: '',
      location: undefined
    }
    stubUserService.deleteUser.and.returnValue(of(userFull))
    component.deleteUser(id);
    expect(stubUserService.deleteUser).toHaveBeenCalled();
  });
  it('createUser() should navigate to create user ', () => {
    const route = TestBed.inject(Router);
    spyOn(route, 'navigate');
    component.createUser();
    expect(route.navigate).toHaveBeenCalledWith(['/create-update']);
  });
  it('updateUser() should navigate to update user ', () => {
    const route = TestBed.inject(Router);
    const id = '1234';
    spyOn(route, 'navigate');
    component.updateUser(id);
    expect(route.navigate).toHaveBeenCalledWith(['/create-update', `${id}`], { queryParams: { id: id } });
  });
  it('goToUserDetails() should navigate to full user ', () => {
    const route = TestBed.inject(Router);
    const id = '1234';
    spyOn(route, 'navigate');
    component.goToUserDetails(id);
    expect(route.navigate).toHaveBeenCalledWith(['user-details', `${id}`], { queryParams: { id: id } });
  });
  it('call createUser() when click button create user', () => {
    spyOn(component, 'createUser');
    let button: HTMLElement[] = fixture.debugElement.nativeElement.querySelectorAll('button');
    button[3].click()
    expect(component.createUser).toHaveBeenCalled();
  });
  it('call deleteUser() when click button delete user', () => {
    spyOn(component, 'deleteUser');
    let button: HTMLElement[] = fixture.debugElement.nativeElement.querySelectorAll('button');
    button[2].click()
    expect(component.deleteUser).toHaveBeenCalled();
  });
  it('call updateUser() when click button update user', () => {
    spyOn(component, 'updateUser');
    let button: HTMLElement[] = fixture.debugElement.nativeElement.querySelectorAll('button');
    button[1].click()
    expect(component.updateUser).toHaveBeenCalled();
  });
  it('call goToUserDetails() when click button update user', () => {
    spyOn(component, 'goToUserDetails');
    let button: HTMLElement[] = fixture.debugElement.nativeElement.querySelectorAll('button');
    button[0].click()
    expect(component.goToUserDetails).toHaveBeenCalled();
  });
  it('number of users should equal number of rows in table', () => {
    component.view.data = usersList.data;
    fixture.detectChanges();
    let tr: HTMLElement[] = fixture.debugElement.nativeElement.querySelectorAll('tr');
    expect(tr.length).toEqual(usersList.data.length + 4)

  });
});





