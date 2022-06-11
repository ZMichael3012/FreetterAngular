import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TweetManagementService} from "../shared/services/tweet-management.service";

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.scss']
})
export class CreateTweetComponent implements OnInit {
  displayCreateTweetDialog: boolean = false;
  autoResize: boolean = true;
  content: string = "";
  limit: number = 250;

  @Output() creatingTweetEvent = new EventEmitter()

  constructor(
    private tweetManagementService: TweetManagementService
  ) { }

  ngOnInit(): void {

  }

  validateContent(content: string){
    return content.length > 0;
  }

  displayCreateTweetDialogFunction(){
    this.displayCreateTweetDialog = true
  }

  createTweet() {
    if (this.validateContent(this.content)){
      this.tweetManagementService.createTweet(this.content).subscribe(() => {
        this.creatingTweetEvent.emit()
        this.displayCreateTweetDialog = false
        this.content = ""
      })
    } else{
      window.alert("Your tweet is too small ;)")
    }
  }
}
