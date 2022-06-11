import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tweet} from "../../../shared/entity/tweet";
import {TweetManagementService} from "../shared/services/tweet-management.service";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input()
  tweet!: Tweet;
  @Output() likingTweetEvent = new EventEmitter()
  @Output() retweetingTweetEvent = new EventEmitter()

  constructor(
    private tweetManagementService: TweetManagementService
  ) { }

  ngOnInit(): void {
  }

  likeTweet(id: any, action: string = 'like'){
    this.tweetManagementService.actOnTweet(id, action).subscribe(() => {
      this.likingTweetEvent.emit()
    })
  }

  unlikeTweet(id: any, action: string = 'unlike'){
    this.tweetManagementService.actOnTweet(id, action).subscribe(() => {

    })
  }

  retweetTweet(id: any, action: string = 'retweet'){
    this.tweetManagementService.actOnTweet(id, action).subscribe(() => {
      this.retweetingTweetEvent.emit()
    })
  }
}
