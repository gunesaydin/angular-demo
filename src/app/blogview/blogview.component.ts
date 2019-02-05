import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})

export class BlogviewComponent implements OnInit {
  blogs;
  blog;

  constructor(private service: BlogsService, private route: ActivatedRoute) { }

  ngOnInit() {

    // Fetches blogs and filters the one called for details page by its ID

    this.service.getBlogs()
      .subscribe(
        blog => {
          this.blogs = blog;
        },
        error => {
          console.log('Dummy error msg');
          throw error;
        },
        () => {
          this.blog = this.getBlog(this.route.snapshot.params['id'])
        }
      );
    
  }

  getBlog(id) {
    return this.blogs.filter(blog => blog._id === id)[0];
  }

}
