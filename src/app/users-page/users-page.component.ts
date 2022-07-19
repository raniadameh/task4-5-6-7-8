import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List, UserPreview, UserFull } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  title = 'task3';
  view!: List<UserPreview>;
  viewid!: UserFull;
  c = 500;
  countF!: string;
  countL!: string;
  countEmail!: string;
  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.usersService.getUsers().subscribe(response => {
      //console.log(response);
      this.view = response
    });
  }
  getUserId(id: string) {
    this.usersService.getUserId(id).subscribe(response => {
      //console.log(response);
      this.viewid = response;
      this.getUsers;
    });
  }
  goToUserDetails(id: string) {
    this.router.navigate(['user-details', `${id}`], { queryParams: { id: id } });
  }
  createUser() {
    this.router.navigate(['/create-update'], { relativeTo: this.activatedRoute });
  }
  updateUser(id: string) {
    this.router.navigate(['/create-update', `${id}`], { queryParams: { id: id } });
  }
  deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe(response => {
      //console.log(response),
      this.getUsers()
    });
  }

}
