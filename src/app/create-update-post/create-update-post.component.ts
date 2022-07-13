import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { identityRevealedValidator } from '../create-update-user-reactive/customValidator';
import { UserPostsService } from '../services/user-posts.service';
import { formatCurrency, Location } from '@angular/common';
import { Post, PostPreview } from '../models/post.model';
import { List } from '../models/user.model';

@Component({
  selector: 'app-create-update-post',
  templateUrl: './create-update-post.component.html',
  styleUrls: ['./create-update-post.component.css']
})
export class CreateUpdatePostComponent implements OnInit {
  ownerId: string = '';
  create = false;
  postForm !: FormGroup;
  done = false;
  sub = false;
  sub1 = false
  err!: string;
  postId!: string;
  viewPost!: Post;

  constructor(private formBuilder: FormBuilder, private location: Location, private postsService: UserPostsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.ownerId = params.get('ownerId') || '';
      this.postId = params.get('postId') || ''
    });
    if (this.postId == '') {
      this.postForm = new FormGroup({
        text: new FormControl('', [Validators.required, Validators.minLength(6)]),
        likes: new FormControl(0, [Validators.required]),
        //tages: new FormControl('', [Validators.required]),
        tages: new FormArray([], [Validators.required]),
        image: new FormControl('', [Validators.required]),
        owner: new FormControl(this.ownerId, [Validators.required])
      });
      this.postForm.controls['owner'].disable();
    }
    else if (this.postId != '') {
      this.postsService.getmyPost(this.postId).subscribe(response => {
        this.viewPost = response;
        this.postForm = new FormGroup({
          text: new FormControl(this.viewPost.text, [Validators.required, Validators.minLength(6)]),
          likes: new FormControl(this.viewPost.likes, [Validators.required]),
          //tages: new FormControl(this.viewPost.tags, [Validators.required]),
          tages: new FormArray([], [Validators.required]),
          image: new FormControl(this.viewPost.image, [Validators.required]),
          owner: new FormControl(this.ownerId, [Validators.required])
        });
        this.viewPost.tags.forEach(tag => { this.addTages(tag) })
        this.postForm.controls['owner'].disable();
      }
      );

    }

  }
  onSubmit() {
    this.postForm.markAllAsTouched();
    if (this.postForm.valid) {
      if (this.postId == '') {
        this.postsService.createPost({
          text: this.text?.value,
          image: this.image?.value,
          likes: 0,
          tags: this.tages?.value,
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
          text: this.text?.value,
          image: this.image?.value,
          tags: this.tages?.value,
          likes: this.likes?.value
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

  get text() {
    return this.postForm.get('text');
  }
  get likes() {
    return this.postForm.get('likes');
  }
  get tages() {
    return this.postForm.get('tages') as FormArray;
  }
  addTages(tag1: any) {
    this.tages.push(this.formBuilder.control(tag1));
  }
  removeTages(i: number) {
    this.tages.removeAt(i);

  }
  get image() {
    return this.postForm.get('image');
  }
}
