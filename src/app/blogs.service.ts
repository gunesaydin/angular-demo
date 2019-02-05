import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }


  // Fetches data from our own public API demo

  getBlogs() {
    return this.http.get('https://public-api-demo.herokuapp.com/api/blogs');
  }

}
