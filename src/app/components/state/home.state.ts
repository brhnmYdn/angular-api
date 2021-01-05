import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Home} from '../model/post';
import {GetAction, PostAction} from '../action/post.action';
import {POST_DEFAULT} from '../default/post.default';
import {HomeService} from '../service/home.service';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@State<Home.State>({
  name: 'HomeState',
  defaults: POST_DEFAULT
})
@Injectable()
export class HomeState {
  @Selector()
  static getPostResponse({ postResponse }: Home.State): Home.Post {
    return postResponse;
  }

  @Selector()
  static getPostList({ postList }: Home.State): Home.Post[] {
    return postList;
  }

  constructor(private homeService: HomeService) {
  }

  @Action(PostAction)
  createPost( { getState,  patchState, dispatch }: StateContext<Home.State>, {payload}: PostAction){
    return this.homeService.createPost(payload).pipe(
      tap((response: Home.Post) => patchState({postResponse: response}))
    );
  }

  @Action(GetAction)
  getAction({patchState}: StateContext<Home.State>): GetAction{
    return this.homeService.getPosts().pipe( // servis'den dönen response, postList'e atanır.
      // 22. satırda Postlist çekilir.
      // Daha sonra component'de  @Select ile  postlist çekilir.
      tap((response: Home.Post[]) => patchState( {postList: response})));
  }
}
