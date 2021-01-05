import {Injectable} from '@angular/core';
import {Home} from '../model/post';
import Post = Home.Post;
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class HomeService{

  constructor(private http: HttpClient) {
  }

  createPost(post: Post): Observable<any> {
    return this.http.post<Post>(API_URL + 'posts', post);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(API_URL + 'posts');
  }
}

