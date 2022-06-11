export interface Tweet{
  id: any,
  content: string,
  likes: number,
  is_retweet: boolean,
  parent?: null | {
    id: any,
    content: string,
    likes: number
  }
}
