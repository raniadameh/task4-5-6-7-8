import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Post, PostPreview } from '../models/post.model';
import { List, UserPreview } from '../models/user.model';
import { UserPostsService } from '../services/user-posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  viewPost!: List<PostPreview>;
  c = 1;
  countF!: string;
  countL!: string;
  countEmail!: string;
  text!: string;
  image!: string;
  likes!: number;
  publishDate!: string;
  owner!: string;
  tags !: Array<string>
  link!: string;
  constructor(private postsService: UserPostsService, private router: Router, private activatedRoute: ActivatedRoute) { }
  id !: string;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => this.id = params['id'],);
    this.getPostsId(this.id);
    // console.log("HELLO FROM POSTS COMPONENT ID =", this.id)
  }
  getPosts() {
    this.postsService.getPosts().subscribe(response => {
      console.log(response);
      this.viewPost = response
    });
  }
  getPostsId(id: string) {
    console.log()
    this.postsService.getPostsId(id).subscribe(response => {
      console.log("getPostsId ", id, response);
      this.viewPost = response;
      //this.getPosts;
    });
  }
  createPosts() {
    this.router.navigate(['/create-update-post'], { queryParams: { ownerId: this.id } });

  }
  updatePost(post: string) {
    this.router.navigate(['/create-update-post'], { queryParams: { ownerId: this.id, postId: post } });
  }
  deletePost(id: string) {
    this.postsService.deletePost(id).subscribe(response => {
      console.log(response),
        this.getPostsId(this.id)
    });
  }

}
