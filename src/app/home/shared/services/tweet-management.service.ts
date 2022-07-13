import {Injectable} from "@angular/core";
import {TweetDto} from "../../../../shared/dto/tweetDto";
import {map, Observable, of} from "rxjs";
import {Tweet} from "../../../../shared/entity/tweet";
import {tweets} from "../../../../shared/fakeData/tweets";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TweetManagementService{

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getTweets(): Observable<Tweet[]>{
    return this.httpClient.get(`http://127.0.0.1:8000/api/tweet/list/`).pipe(map((data: any) => {
      return data.map((tweet: any) => {
        return {
          id: tweet.id,
          content: tweet.content,
          likes: tweet.likes,
          is_retweet: tweet.is_retweet,
          parent: tweet.parent
        }
      })
    }))
  }

  getTweetById(id: any): Observable<Tweet>{
    return this.httpClient.get(`http://127.0.0.1:8000/api/tweet/detail/${id}`).pipe(map((data: any) => {
      return {
        id: data.id,
        content: data.content,
        likes: data.likes,
        is_retweet: data.is_retweet,
        parent: data.parent
      }
    }))
  }

  createTweet(content: string){
    const body = {
      content: content
    }
    return this.httpClient.post('http://127.0.0.1:8000/api/tweet/create/', body)
  }

  actOnTweet(id: any, action: string){
    const body = {
      id: id,
      action: action
    }
    return this.httpClient.post('http://127.0.0.1:8000/api/tweet/action/', body)
  }

  deleteTweet(id: any) {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/tweet/delete/${id}`)
  }
}
