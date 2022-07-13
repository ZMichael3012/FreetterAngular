import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from "../../../shared/entity/tweet";
import {TweetManagementService} from "../shared/services/tweet-management.service";

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.scss']
})
export class TweetDetailsComponent implements OnInit {
  displayTweetDetailsDialog: boolean = false;
  @Input()
  tweet_id!: any;
  tweet!: Tweet;

  constructor(
    private tweetManagementService: TweetManagementService
  ) { }

  ngOnInit(): void {
    this.getTweet()
  }

  getTweet(){
    this.tweetManagementService.getTweetById(this.tweet_id).subscribe(tweet => {
      this.tweet = tweet
    })
  }
}
