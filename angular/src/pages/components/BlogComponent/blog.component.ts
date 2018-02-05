import { Component, OnInit } from '@angular/core';
import { IBlog, ICategoryViewModel } from '../../../models/models';
import { BlogService } from '../../../services/base.service';
@Component({
    moduleId: module.id,
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    providers: [BlogService],
})

export class BlogComponent implements OnInit {
    title = 'All Posts';
    public errorMessage: String = '';
    public blogs: IBlog[] = [];
    public onChangingProgress: Boolean = false;
    public currentBlog: IBlog = {} as IBlog;
    public isSelected: Boolean = false;
    public selectedBlog: IBlog = {} as IBlog;
    public categories: ICategoryViewModel[] = [];
    public expandedView: Boolean = false;
    public selectedCategory: String = '';
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
        this.currentBlog.UserId = 1;
        this.currentBlog.PostedOn = new Date();
        this.blogService.post(this.currentBlog).subscribe((data: any) => {
            this.onChangingProgress = false;
            this.getAllBlogs();
            this.setTitle();
        });
    }

    public getBlogInfo(blogId: number, forEdit: boolean = false) {
        this.blogService.get(blogId).subscribe((data: IBlog) => {
            this.onChangingProgress = true;
            this.currentBlog = data;
            this.setTitle();
        }, (err) => {
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public deleteBlog(page: IBlog) {
        this.blogService.delete(page.Id).subscribe(() => {
            this.onChangingProgress = false;
            this.getAllBlogs();
        }, (err) => {
            this.errorMessage = `There was some problem when trying to delete data`;
        });
    }

    public toggleForm() {
        if (this.onChangingProgress) {
            this.currentBlog = {} as IBlog;
        }
        this.onChangingProgress = !this.onChangingProgress;
        this.setTitle();
    }

    public blogSelected(blog) {
        if (blog) {
            this.isSelected = true;
            this.selectedBlog = blog;
            this.onChangingProgress = true;
            this.toggleForm();
        } else {
            this.isSelected = false;
            this.selectedBlog = {} as IBlog;
        }
    }

    public categorySelected(category) {
        this.selectedCategory = category;
        this.filteredBlogs = this.blogs.filter(x => x.Category === category);
    }

    public showExpandedView(show) {
        this.expandedView = show;
        this.onChangingProgress = false;
        this.setTitle();
    }

    public setTitle() {
        if (this.onChangingProgress) {
            this.title = 'Add New Post';
        } else {
            this.title = 'All Posts';
        }
    }
}
