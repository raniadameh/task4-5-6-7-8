import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUpdateUserReactiveComponent } from './create-update-user-reactive/create-update-user-reactive.component';
import { CreateUpdatePostComponent } from './create-update-post/create-update-post.component';
import { IdentityRevealedDirective } from './directives/identity-revealed.directive';
import { CreateUpdateUserDynamicComponent } from './create-update-user-dynamic/create-update-user-dynamic.component';
import { CreateUpdatePostDynamicComponent } from './create-update-post-dynamic/create-update-post-dynamic.component';
import { SharedModule } from './shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsPageComponent,
    UsersPageComponent,
    PageNotFoundComponent,
    UserDetailsPageComponent,
    DetailsComponent,
    PostsComponent,
    CreateUpdateComponent,
    CreateUpdateUserReactiveComponent,
    CreateUpdatePostComponent,
    IdentityRevealedDirective,
    CreateUpdateUserDynamicComponent,
    CreateUpdatePostDynamicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
