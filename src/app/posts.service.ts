import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  // Web Challenge 3 API fetch functions

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  
  getComments(postId) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + postId);
  }
}
