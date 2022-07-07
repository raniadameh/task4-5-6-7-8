import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { List, UserPreview, UserFull } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { Location } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { identityRevealedValidator } from './customValidator';

@Component({
  selector: 'app-create-update-user-reactive',
  templateUrl: './create-update-user-reactive.component.html',
  styleUrls: ['./create-update-user-reactive.component.css']
})

export class CreateUpdateUserReactiveComponent implements OnInit {
  view!: List<UserPreview>;
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
  viewid!: UserFull;
  sub1 = false;
  done1 = false;
  userForm!: FormGroup;
  constructor(private location: Location, private usersService: UsersService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      if (this.id == '') {
        this.create = true;
        this.userForm = new FormGroup({
          nameF1: new FormControl('', [Validators.required, Validators.minLength(2),]),
          nameL1: new FormControl('', [Validators.required, Validators.minLength(2),]),
          email1: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        }
          , { validators: identityRevealedValidator });
      }
      else if (this.id != '') {
        this.update = true;
        this.usersService.getUserId(this.id).subscribe(response => {
          this.viewid = response;
          this.userForm = new FormGroup({
            nameF1: new FormControl(this.viewid.firstName, [Validators.required, Validators.minLength(2),]),
            nameL1: new FormControl(this.viewid.lastName, [Validators.required, Validators.minLength(2),]),
            email1: new FormControl(this.viewid.email),
            title1: new FormControl(this.viewid.title),
            gender1: new FormControl(this.viewid.gender),
            phone1: new FormControl(this.viewid.phone)
          }, { validators: identityRevealedValidator }
          );
          this.userForm.controls['email1'].disable();
        }
        );
      }
    },
    );
  }
  onSubmit() {
    if (this.id == '') {
      this.usersService.createUser({ firstName: this.nameF1?.value, lastName: this.nameL1?.value, email: this.email1?.value })
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
        firstName: this.nameF1?.value,
        lastName: this.nameL1?.value,
        //email: this.email1?.value,
        title: this.title1?.value,
        gender: this.gender1?.value,
        phone: this.phone1?.value
      };
      this.usersService.updateUser(this.id, newAccount)
        .subscribe({
          next: response => {
            this.sub1 = true;
            this.done1 = false
            this.response = response;
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

  get nameF1() {
    return this.userForm.get('nameF1');
  }
  get nameL1() {
    return this.userForm.get('nameL1');
  }
  get email1() {
    return this.userForm.get('email1');
  }
  get title1() {
    return this.userForm.get('title1');
  }
  get gender1() {
    return this.userForm.get('gender1');
  }
  get phone1() {
    return this.userForm.get('phone1');
  }

}

