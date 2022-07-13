import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Tweet} from "../../../shared/entity/tweet";
import {TweetManagementService} from "../shared/services/tweet-management.service";
import {TweetDetailsComponent} from "../tweet-details/tweet-details.component";

@Component({
  selector: 'app-d-parent-tweet',
  templateUrl: './d-parent-tweet.component.html',
  styleUrls: ['./d-parent-tweet.component.scss']
})
export class DParentTweetComponent implements OnInit {
  @ViewChild(TweetDetailsComponent) tweetDetailsComponent!: TweetDetailsComponent;

  @Input()
  tweet_id?: any;
  tweet?: Tweet;

  constructor(
    private tweetManagementService: TweetManagementService
  ) { }

  ngOnInit(): void {
    if(typeof this.tweet_id !== undefined){
      this.tweetManagementService.getTweetById(this.tweet_id!).subscribe(tweet => {
        this.tweet = tweet
      })
    }
  }

  watchTweet() {
    this.tweetDetailsComponent.displayTweetDetailsDialog = true
  }
}
