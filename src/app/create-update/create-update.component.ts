import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { List, UserPreview, UserFull } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  view!: List<UserPreview>;
  countF!: string;
  countL!: string;
  countEmail!: string;
  err!: string;
  response: any;
  done = false;
  submitted = true;
  sub = false;
  id: string = '';
  create = false;
  update = false;
  titles: string[] = ["mr", "ms", "mrs", "miss", "dr", ""];
  title!: string;
  genders: string[] = ["male", "female", "other"];
  gender!: string;
  birthday!: string;
  phone!: string;
  picture!: string;
  viewid!: UserFull;
  sub1 = false;
  done1 = false;
  constructor(private location: Location, private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      if (this.id == '') { this.create = true; }
      else if (this.id != '') {
        this.update = true;
        this.usersService.getUserId(this.id).subscribe(response => {
          this.viewid = response;
          this.countF = this.viewid.firstName;
          this.countL = this.viewid.lastName;
          this.countEmail = this.viewid.email;
          this.title = this.viewid.title;
          this.gender = this.viewid.gender;
          this.birthday = this.birthday;
          this.phone = this.viewid.phone;
          this.picture = this.viewid.picture;
        });
      }
    },
    );
  }
  onSubmit() {
    if (this.id == '') {
      this.usersService.createUser({ firstName: this.countF, lastName: this.countL, email: this.countEmail })
        .subscribe({
          next: response => {
            this.sub = true;
            this.done = false
            this.response = response;
            setTimeout(() => {
              this.back();
            }, 2000);
          },
          error: (err) => {
            this.err = 'Error Occurred : email is exists', this.done = true, this.sub = false
          }
        });
    }
    //////////////////////////////////////////////////////
    else if (this.id != '') {
      const newAccount = {
        firstName: this.countF,
        lastName: this.countL,
        title: this.title,
        gender: this.gender,
        dateOfBirth: this.birthday,
        phone: this.phone,
      };
      this.usersService.updateUser(this.id, newAccount)
        .subscribe({
          next: response => {
            this.sub1 = true,
              this.done1 = false
            setTimeout(() => {
              this.back();
            }, 2000);
          },
          error: (err) => {
            this.err = 'Error Occurred when updated', this.done1 = true, this.sub1 = false
          }
        });
    }
  }
  back() {
    this.location.back();
  }
}
