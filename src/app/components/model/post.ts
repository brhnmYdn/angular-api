// tslint:disable-next-line:no-namespace
 export namespace Home {
  export interface State {
    post: Post;
    postResponse: Post;
    postList: Post[];
  }
  export interface Post {
    id: number;
    title: string;
    author: string;
  }
}

