import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { CreateUpdatePostComponent } from './create-update-post/create-update-post.component';
import { CreateUpdateUserReactiveComponent } from './create-update-user-reactive/create-update-user-reactive.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { DetailsComponent } from './details/details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'create-update', component: CreateUpdateUserReactiveComponent },
  { path: 'create-update/:id', component: CreateUpdateUserReactiveComponent },
  {
    path: 'user-details/:id', component: UserDetailsPageComponent,
    children: [
      { path: 'details', component: DetailsComponent },
      { path: 'posts', component: PostsComponent }
    ],
  },
  { path: 'create-update-post', component: CreateUpdatePostComponent },
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
