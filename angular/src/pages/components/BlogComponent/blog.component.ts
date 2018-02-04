import { Component, OnInit } from '@angular/core';
import { IPage, IMenu, IArticle, IBlogCategory } from '../../../models/models';
import { ArticleService, BlogCategoryService } from '../../../services/base.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    moduleId: module.id,
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    providers: [ArticleService, BlogCategoryService],
})

export class BlogComponent implements OnInit {
    title = 'Blog';
    public errorMessage: String = '';
    public blogs: IArticle[] = [];
    public blogCategories: IBlogCategory[] = [];

    public onChangingProgress: Boolean = false;
    public currentBlog: IArticle = {} as IArticle;
    // use to hold object of the page object that is currently in progress of adding or updating
    public currentBlogCategory: IBlogCategory = {} as IBlogCategory;
    public isSelected: Boolean = false;
    public selectedBlog: IArticle = {} as IArticle;
    constructor(public sanitizer: DomSanitizer, public blogService: ArticleService,
        public blogCategoryService: BlogCategoryService) { }
    ngOnInit() {
        this.getAllBlogs();
        this.getAllBlogCategories();
    }

    public getAllBlogs() {
        this.blogService.getAll().subscribe((data: IArticle[]) => {
            this.blogs = data;
        }, (err) => {
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public getAllBlogCategories() {
        this.blogCategoryService.getAll().subscribe((data: IBlogCategory[]) => {
            this.blogCategories = data;
        }, (err) => {
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public saveBlogCategory() {

    }

    public saveBlog() {
        this.blogService.post(this.currentBlog).subscribe((data: any) => {
            this.onChangingProgress = false;
            this.getAllBlogs();
        });
    }

    public getBlogCategoryInfo(blogCategoryId: number, forEdit: boolean = false) {
        this.blogCategoryService.get(blogCategoryId).subscribe((data: IBlogCategory) => {
            this.onChangingProgress = true;
            this.currentBlogCategory = data;
        }, (err) => {
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public getBlogInfo(blogId: number, forEdit: boolean = false) {
        this.blogService.get(blogId).subscribe((data: IArticle) => {
            this.onChangingProgress = true;
            this.currentBlog = data;
        }, (err) => {
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public deleteBlog(page: IPage) {
        this.blogService.delete(page.Id).subscribe(() => {
            this.onChangingProgress = false;
            this.getAllBlogs();
        }, (err) => {
            this.errorMessage = `There was some problem when trying to delete data`;
        });
    }

    public toggleForm() {
        if (this.onChangingProgress) {
            this.currentBlog = {} as IArticle;
            this.currentBlogCategory = {} as IBlogCategory;
        }
        this.onChangingProgress = !this.onChangingProgress;
    }

    public blogSelected(blog) {
        if (blog) {
            this.isSelected = true;
            this.selectedBlog = blog;
            this.onChangingProgress = true;
            this.toggleForm();
        } else {
            this.isSelected = false;
            this.selectedBlog = {} as IArticle;
        }

    }
}
