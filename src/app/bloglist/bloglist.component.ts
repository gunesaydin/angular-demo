import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  blogs;
  
  constructor(private service: BlogsService, private router: Router) { }

  ngOnInit() {

    // Fetches all blogs when blogs list component is mounted

    this.service.getBlogs()
      .subscribe(
        blog => {
          this.blogs = blog;
        },
        error => {
          console.log('Dummy error msg');
          throw error;
        }
      );

  }

  // Opens the details page of the clicked blog using its params.id

  onClick(id) {
    this.router.navigate(['/blogview', id])
  }

}
