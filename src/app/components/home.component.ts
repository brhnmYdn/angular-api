import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GetAction, PostAction} from './action/post.action';
import {Home} from './model/post';
import {HomeState} from './state/home.state';
import {Observable} from 'rxjs';
import Post = Home.Post;
import {Form, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./styles.css']
})
export class HomeComponent implements OnInit{
  @Select(HomeState.getPostResponse)
  response$: Observable<Post>;

  @Select(HomeState.getPostList)
  postList$: Observable<Home.Post[]>;

  homeForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.store.dispatch(new GetAction());
  }

  buildForm(): void {
    this.homeForm = this.fb.group({
      id: [''],
      author: [''],
      title: ['']
    });
  }

  createPost(): void{
    this.store.dispatch(new PostAction(this.homeForm.value));
  }
}
