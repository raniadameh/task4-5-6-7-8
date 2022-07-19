import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { UserFull } from '../models/user.model';
import { UserPostsService } from '../services/user-posts.service';
import { UsersService } from '../services/users.service';
import { CreatePostService } from '../shared/form-input/create-post.service';
import { InputBase } from '../shared/form-input/input-base';
import { InputGeneratorService } from '../shared/form-input/input-generator.service';
import { UpdatePostService } from '../shared/form-input/update-post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-update-post-dynamic',
  templateUrl: './create-update-post-dynamic.component.html',
  styleUrls: ['./create-update-post-dynamic.component.css']
})
export class CreateUpdatePostDynamicComponent implements OnInit {
  inputs: InputBase<any>[] = [];
  form!: FormGroup;
  ownerId: string = '';
  create = false;
  done = false;
  sub = false;
  sub1 = false
  err!: string;
  postId!: string;
  viewPost!: Post;
  userview!: UserFull;
  constructor(private ig: InputGeneratorService, private cps: CreatePostService, private ups: UpdatePostService, private usersService: UsersService, private formBuilder: FormBuilder, private location: Location, private postsService: UserPostsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.ownerId = params.get('ownerId') || '';
      this.postId = params.get('postId') || ''
    });
    if (this.postId == '') {
      this.usersService.getUserId(this.ownerId).subscribe(response => {
        this.userview = response;
        this.inputs = this.cps.getQuestions(this.userview);
        this.form = this.ig.generateFormGroup(this.inputs);
        this.form.controls['owner'].disable();
      });
    }
    if (this.postId != '') {
      this.postsService.getmyPost(this.postId).subscribe(response => {
        this.viewPost = response;
        this.inputs = this.ups.getQuestions(this.viewPost);
        this.form = this.ig.generateFormGroup(this.inputs);
        this.form.controls['owner'].disable();
      });
    }
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if (this.postId == '') {
        this.postsService.createPost({
          text: this.form.get('post')?.value,
          image: this.form.get('image')?.value,
          likes: this.form.get('likes')?.value,
          tags: []/* this.form.get('text')?.value */,
          owner: this.ownerId
        })
          .subscribe({
            next: response => {
              this.sub = true;
              setTimeout(() => {
                this.back();
              }, 3000);
            },
            error: (err) => {
              this.err = 'Error Occurred', this.done = true, this.sub = false
            }
          });
      }
      else if (this.postId != '') {
        const newAccount = {
          text: this.form.get('post')?.value,
          image: this.form.get('image')?.value,
          //tags: this.form.get('text')?.value,
          likes: this.form.get('likes')?.value
        };
        this.postsService.updatePost(this.postId, newAccount)
          .subscribe({
            next: response => {
              this.sub1 = true;
              setTimeout(() => {
                this.back();
              }, 3000);
            },
            error: (err) => {
              this.err = 'Error Occurred when updated';
            }
          });
      }


    }
  }
  back() {
    this.location.back();
  }
}


