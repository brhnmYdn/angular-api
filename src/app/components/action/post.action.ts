import {Home} from '../model/post';
import Post = Home.Post;

export class PostAction {
  static readonly type = '[Post] create home';
  static readonly desc = 'create home';
  constructor(public payload: Post) {}
}


export class GetAction {
  static readonly type = '[Post] get posts';
  static readonly desc = 'get posts';
}

