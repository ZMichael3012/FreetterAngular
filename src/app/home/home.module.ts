import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import {TweetManagementService} from "./shared/services/tweet-management.service";
import {PrimengModule} from "../../shared/primeng.module";
import { TweetComponent } from './tweet/tweet.component';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ParentTweetComponent } from './parent-tweet/parent-tweet.component';
import { DParentTweetComponent } from './d-parent-tweet/d-parent-tweet.component';
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    NewsfeedComponent,
    TweetComponent,
    CreateTweetComponent,
    ParentTweetComponent,
    DParentTweetComponent,
    TweetDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimengModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TweetManagementService
  ]
})
export class HomeModule { }
