import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Post, PostCreate, PostPreview } from '../models/post.model';
import { List } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {
  baseURL = 'https://dummyapi.io/data/v1';
  options = {
    headers: new HttpHeaders().set('app-id', '62b95602e20e2d43f1dfc3fb'),
  };
  constructor(private http: HttpClient) { }
  getmyPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseURL}/post/${id}`, {
      ...this.options
      ,
      params: { created: 1 }
    });
  }
  getPosts(): Observable<List<PostPreview>> {
    return this.http.get<List<PostPreview>>(`${this.baseURL}/post`, {
      ...this.options
      ,
      params: { created: 1 }
    });
  }
  getPostsId(id: string): Observable<List<PostPreview>> {
    return this.http.get<List<PostPreview>>(`${this.baseURL}/user/${id}/post`, {
      ...this.options
    });
  }
  createPost(payload: PostCreate): Observable<Post> {
    return this.http.post<Post>(`${this.baseURL}/post/create`, payload, this.options).pipe(
      catchError(this.handleError),
    );
  }
  deletePost(id: string): Observable<string> {
    return this.http.delete<string>(`${this.baseURL}/post/${id}`, this.options);
  }
  updatePost(id: string, newUser: any): Observable<Post> {
    return this.http.put<Post>(`${this.baseURL}/post/${id}`, newUser, this.options);
  }
  handleError(error: HttpErrorResponse): Observable<never> {
    console.log('Inside handleError():', error);
    return throwError('some error occurred');
  }


}
