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


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsPageComponent,
    UsersPageComponent,
    PageNotFoundComponent,
    UserDetailsPageComponent,
    DetailsComponent,
    PostsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
