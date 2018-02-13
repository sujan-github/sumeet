import { Component, OnInit } from '@angular/core';
import { IBlog, ICategoryViewModel } from '../../../models/models';
import { BlogService } from '../../../services/base.service';
@Component({
    moduleId: module.id,
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styles: ['p {color: darkslategray;}'],
    providers: [BlogService],
})

export class BlogComponent implements OnInit {
    title = 'All Posts';
    private _sideBarWidth: Number = 0;
    public errorMessage: String = '';
    public blogs: IBlog[] = [];
    public onChangingProgress: Boolean = false;
    public currentBlog: IBlog = {} as IBlog;
    public isSelected: Boolean = false;
    public selectedBlog: IBlog = {} as IBlog;
    public categories: ICategoryViewModel[] = [];
    public expandedView: Boolean = false;
    public selectedCategory: String = '';
    public filtered: Boolean = false;
    public filteredBlogs: IBlog[] = [];
    public sideBarExpanded: Boolean = true;
    public sideBar: any = 'mySidenav';
    constructor(public blogService: BlogService) { }
    ngOnInit() {
        this.getAllBlogs();
        this._sideBarWidth = document.getElementById(this.sideBar).clientWidth;
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

    public saveBlog() {
        this.currentBlog.Id = 0;
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

    public deleteBlog() {
        this.blogService.delete(this.selectedBlog.Id).subscribe(() => {
            this.onChangingProgress = false;
            this.isSelected = false;
            this.getAllBlogs();
        }, (err) => {
            this.errorMessage = `There was some problem when trying to delete data`;
        });
    }

    public toggleForm() {
        if (this.onChangingProgress) {
            this.currentBlog = {} as IBlog;
        } else {
            this.isSelected = false;
            this.sideBarExpanded = false;
        }
        this.onChangingProgress = !this.onChangingProgress;
        this.setTitle();
    }

    public blogSelected(blog?) {
        if (blog) {
            this.isSelected = true;
            this.selectedBlog = blog;
            this.onChangingProgress = false;
            this.toggleSideBar();
            this.setTitle();
        } else {
            this.isSelected = false;
            this.selectedBlog = {} as IBlog;
        }
    }

    public categorySelected(category) {
        this.selectedCategory = category;
        this.filtered = true;
        this.filteredBlogs = this.blogs.filter(x => x.Category === category);
    }

    public showExpandedView(show) {
        this.expandedView = show;
        this.onChangingProgress = false;
        this.blogSelected();
        this.setTitle();
    }

    public toggleSideBar(expandSideBar?) {
        if (expandSideBar != null) {
            this.sideBarExpanded = expandSideBar;
            document.getElementById(this.sideBar).style.width = this.sideBarExpanded ? '0' : `${this._sideBarWidth}px`;
        } else {
            document.getElementById(this.sideBar).style.width = this.sideBarExpanded ? '0' : `${this._sideBarWidth}px`;
            this.sideBarExpanded = !this.sideBarExpanded;
        }
    }

    public removeFilter() {
        this.selectedCategory = '';
        this.filtered = false;
        this.getAllBlogs();
    }
    public setTitle() {
        if (this.isSelected) {
            this.title = this.selectedBlog.Title;
        } else {
            if (this.onChangingProgress) {
                this.title = 'Add New Post';
            } else {
                this.title = 'All Posts';
            }
        }
    }
}
