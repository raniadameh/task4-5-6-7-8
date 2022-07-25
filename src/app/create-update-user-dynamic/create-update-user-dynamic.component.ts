import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserFull } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { InputBase } from '../shared/form-input/input-base';
import { InputGeneratorService } from '../shared/form-input/input-generator.service';
import { PutInputService } from '../shared/form-input/put-input.service';

@Component({
  selector: 'app-create-update-user-dynamic',
  templateUrl: './create-update-user-dynamic.component.html',
  styleUrls: ['./create-update-user-dynamic.component.css']
})
export class CreateUpdateUserDynamicComponent implements OnInit {
  inputs: InputBase<any>[] = [];
  done1 = false;
  done = false;
  sub = false;
  sub1 = false;
  form!: FormGroup;
  id: string = '';
  update = false;
  create = false;
  err = '';
  viewid!: UserFull;

  constructor(private location: Location, private ig: InputGeneratorService, private putInput: PutInputService, private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      if (this.id == '') {
        this.create = true;
        this.inputs = this.putInput.createUserInput();
        this.form = this.ig.generateFormGroup(this.inputs);
      }
      else if (this.id != '') {
        this.usersService.getUserId(this.id).subscribe(
          response => {
            this.viewid = response;
            this.update = true;
            this.inputs = this.putInput.updateUserInput(this.viewid);
            this.form = this.ig.generateFormGroup(this.inputs);
            this.form.controls['email'].disable();
          }
        );
      }
    },
    );

  }
  onSubmit(): void {
    if (this.id == '') {
      const payload = {
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
        email: this.form.get('email')?.value
      }
      this.usersService.createUser({ firstName: payload.firstName, lastName: payload.lastName, email: payload.email })
        .subscribe({
          next: response => {
            this.sub = true;
            this.done = false
            setTimeout(() => {
              this.back();
            }, 2000);
          },
          error: (err) => {
            this.err = 'email is exists'
            this.err = 'Error Occurred : email is exists', this.done = true, this.sub = false
          }
        });
    }
    if (this.id != '') {
      //console.log("title:", this.form.get('title')?.value);

      const payload = {
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
        //email: this.form.get('email')?.value
        title: this.form.get('title')?.value,
        gender: this.form.get('gender')?.value,
        phone: this.form.get('phone')?.value,
      }
      this.usersService.updateUser(this.id, payload)
        .subscribe({
          next: response => {
            this.sub1 = true;
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
