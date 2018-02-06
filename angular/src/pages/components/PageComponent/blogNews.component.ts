import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/base.service';
import { IBlog, ICategoryViewModel } from '../../../models/models';

@Component({
  moduleId: module.id,
  selector: 'app-blog-news',
  templateUrl: './blognews.component.html',
  providers: [BlogService]
})

export class BlogNewsComponent implements OnInit {
  title = 'All Posts';
  public errorMessage: String = '';
  public blogs: IBlog[] = [];
  public isSelected: Boolean = false;
  public categories: ICategoryViewModel[] = [];
  public expandedView: Boolean = false;
  public selectedCategory: String = '';
  public filtered: Boolean = false;
  public filteredBlogs: IBlog[] = [];
  constructor(public blogService: BlogService) { }
  ngOnInit() {
    this.getAllBlogs();
  }

  public getAllBlogs() {
    this.blogService.getAll().subscribe((data: IBlog[]) => {
      this.blogs = data;
      this.filteredBlogs = data;
      data.forEach((blog) => {
        const categoryCount = data.filter(x => x.Category === blog.Category);
        const category = this.categories.filter(x => x.Title === blog.Category);
        if (category.length < 1) {
          this.categories.push({
            Title: blog.Category,
            Count: categoryCount.length,
          });
        }
      });
    }, (err) => {
      this.errorMessage = `There was some problem when trying to retrieve data.`;
    });
  }

  public categorySelected(category) {
    this.selectedCategory = category;
    this.filtered = true;
    this.filteredBlogs = this.blogs.filter(x => x.Category === category);
  }

  public removeFilter() {
    this.selectedCategory = '';
    this.filtered = false;
    this.getAllBlogs();
  }
}
