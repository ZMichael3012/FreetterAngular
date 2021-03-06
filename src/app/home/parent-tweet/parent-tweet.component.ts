import {Component, Input, OnInit} from '@angular/core';
import {TweetManagementService} from "../shared/services/tweet-management.service";
import {Tweet} from "../../../shared/entity/tweet";

@Component({
  selector: 'app-parent-tweet',
  templateUrl: './parent-tweet.component.html',
  styleUrls: ['./parent-tweet.component.scss']
})
export class ParentTweetComponent implements OnInit {

  @Input()
  tweet_id?: any | undefined;
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
}
