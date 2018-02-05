import { Component, OnInit } from '@angular/core';
import { IPage, IMenu, IArticle, ICategoryViewModel } from '../../../models/models';
import { ArticleService } from '../../../services/base.service';
@Component({
    moduleId: module.id,
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    providers: [ArticleService],
})

export class BlogComponent implements OnInit {
    title = 'Blog';
    public errorMessage: String = '';
    public blogs: IArticle[] = [];
    public onChangingProgress: Boolean = false;
    public currentBlog: IArticle = {} as IArticle;
    public isSelected: Boolean = false;
    public selectedBlog: IArticle = {} as IArticle;
    public categories: ICategoryViewModel[] = [];
    public expandedView: Boolean = false;
    public selectedCategory: String = '';
    public filteredBlogs: IArticle[] = [];
    constructor(public blogService: ArticleService) { }
    ngOnInit() {
        this.getAllBlogs();
    }

    public getAllBlogs() {
        this.blogService.getAll().subscribe((data: IArticle[]) => {
            this.blogs = data;
            this.filteredBlogs = data;
            data.forEach((blog) => {
                const category = this.categories.filter(x => x.Title === blog.Category);
                if (category.length < 1) {
                    this.categories.push({
                        Title: blog.Category,
                        Count: category.length
                    });
                }
            });
        }, (err) => {
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public saveBlog() {
        this.currentBlog.CategoryId = 1;
        this.currentBlog.PageId = 1;
        this.currentBlog.UserId = 1;
        this.currentBlog.IsBlog = true;
        this.currentBlog.PostedOn = new Date();
        this.blogService.post(this.currentBlog).subscribe((data: any) => {
            this.onChangingProgress = false;
            this.getAllBlogs();
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

    public categorySelected(category) {
        this.selectedCategory = category;
        this.filteredBlogs = this.blogs.filter(x => x.Category === category);
    }

    public showExpandedView(show) {
        this.expandedView = show;
    }
}
