import {Component, OnInit, ViewChild} from '@angular/core';
import {TweetManagementService} from "../shared/services/tweet-management.service";
import {Tweet} from "../../../shared/entity/tweet";
import {tweets} from "../../../shared/fakeData/tweets";
import {TweetComponent} from "../tweet/tweet.component";
import {CreateTweetComponent} from "../create-tweet/create-tweet.component";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  tweets: Tweet[] = []

  @ViewChild(TweetComponent) tweetComponent!: TweetComponent;
  @ViewChild(CreateTweetComponent) createTweetComponent!: CreateTweetComponent;

  constructor(
    private _tweetManagementService: TweetManagementService
  ) { }

  ngOnInit(): void {
    this.getTweets()
  }

  getTweets(){
    return this._tweetManagementService.getTweets().subscribe(tweets => {
      this.tweets = tweets
    })
  }

  displayCreateTweetDialog(){
    this.createTweetComponent.displayCreateTweetDialogFunction()
  }

  tweetCreatedEventHandler() {
    this.getTweets()
  }

  likedTweetEventHandler() {
    this.getTweets()
  }

  retweetedEventHandler() {
    this.getTweets()
  }

  deletedTweetEventHandler() {
    this.getTweets()
  }
}
