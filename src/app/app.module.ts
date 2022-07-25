import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdatePostDynamicComponent } from './create-update-post-dynamic/create-update-post-dynamic.component';
import { CreateUpdatePostComponent } from './create-update-post/create-update-post.component';
import { CreateUpdateUserDynamicComponent } from './create-update-user-dynamic/create-update-user-dynamic.component';
import { CreateUpdateUserReactiveComponent } from './create-update-user-reactive/create-update-user-reactive.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { DetailsComponent } from './details/details.component';
import { IdentityRevealedDirective } from './directives/identity-revealed.directive';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { SharedModule } from './shared/shared.module';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { UsersPageComponent } from './users-page/users-page.component';


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
