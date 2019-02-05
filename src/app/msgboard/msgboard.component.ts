import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-msgboard',
  templateUrl: './msgboard.component.html',
  styleUrls: ['./msgboard.component.css']
})
export class MsgboardComponent implements OnInit {

  posts;

  constructor(private service: PostsService) { }

  ngOnInit() {

    // Fetching posts from Web Challenge 3 API

    this.service.getPosts()
      .subscribe(
        post => {
          this.posts = post;
        },
        error => {
          console.log('Dummy error msg');
          throw error;
        },
        () => {

          // Fetching comments for every post by its own post ID key

          this.posts.forEach((post, index) => {
            this.service.getComments(post.id)
              .subscribe(
                comments => {
                  this.posts[index] = { ...post, comments, hidden: true }; 
                },
                error => {
                  console.log('Dummy error msg');
                  throw error;
                }
              )
          });
        }
      );
  }

  // Toggles comment section visibility on the clicked post.

  onClick(id) {
    let index = +id - 1;
    this.posts[index].hidden = !this.posts[index].hidden;
  }

}
