import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/base.service';

@Component({
  moduleId: module.id,
  selector: 'app-blog-news',
  templateUrl: './blognews.component.html',
  providers: [BlogService]
})

export class BlogNewsComponent implements OnInit {
  title = 'Blog News';
  constructor(
    public blogService: BlogService
  ) {
    console.log(window.location.host);
    console.log(window.location.protocol);
  }
  ngOnInit() {
  }
}
