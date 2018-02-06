import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/base.service';
import { IBlog, IBlogCategoryViewModel } from '../../../models/models';

@Component({
  moduleId: module.id,
  selector: 'app-blog-news',
  templateUrl: './blognews.component.html',
  providers: [BlogService]
})

export class BlogNewsComponent implements OnInit {
  title = 'Blog News';
  public blogs: IBlogCategoryViewModel[] = [];
  constructor(public blogService: BlogService) { }
  ngOnInit() {
    this._getAllBlogs();
  }
  private _getAllBlogs() {
    this.blogService.getAll().subscribe((data: IBlog[]) => {
      const tempBlogs = data;
      data.forEach((blog: IBlog) => {
        const categoryCount = data.filter(x => x.Category === blog.Category);
        const category: IBlog[] = tempBlogs.filter(x => x.category === blog.Category);

      }); }); } }
