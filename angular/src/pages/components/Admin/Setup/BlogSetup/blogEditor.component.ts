import { Component, OnInit } from '@angular/core';
import { IBlog, ICategoryViewModel } from '../../../../../models/models';
import { BlogService } from '../../../../../services/base.service';
import { Constants } from '../../../../../constants/constants';

export interface IBlogPanel {
    isExpandedView: boolean;
    isBlogPanelOpen: boolean;
    isFormPanelOpen: boolean;
}

export interface IBlogFilter {
    category: string;
    date: string;
    author: string;
    filterText?: string;
    isFiltered: boolean;
}

@Component({
    moduleId: module.id,
    selector: 'app-blog-editor',
    templateUrl: './blogEditor.component.html',
    providers: [BlogService],
})

export class BlogEditorComponent implements OnInit {
    title: string;
    private _allBlogData: IBlog[];
    private _filter: IBlogFilter;
    private _panelSetup: IBlogPanel;
    private _blogs: IBlog[] = [];
    private _showForm: boolean;
    private _currentBlog: IBlog = {} as IBlog;
    private _categories: ICategoryViewModel[] = [];
    constructor(public blogService: BlogService) {
        this.title = 'All Posts';
        this._panelSetup = {
            isExpandedView: false,
            isBlogPanelOpen: true,
            isFormPanelOpen: true,
        };
        this._filter = {
            author: '',
            category: '',
            date: '',
            isFiltered: false,
            filterText: ''
        };
    }

    ngOnInit() {
        this.getAllBlogs();
    }

    public getAllBlogs() {
        this.blogService.getAll().subscribe((data: IBlog[]) => {
            this._allBlogData = data;
            this._blogs = data;
            data.forEach((blog) => {
                const categoryCount = data.filter(x => x.Category === blog.Category);
                const category = this._categories.filter(x => x.Title === blog.Category);
                if (category.length < 1) {
                    this._categories.push({
                        Title: blog.Category,
                        Count: categoryCount.length,
                    });
                }
            });
        }, (err) => {
        });
    }

    public saveBlog() {
        if (!this._currentBlog.Id) {
            this._currentBlog.Id = 0;
        }
        this._currentBlog.UserId = 1;
        this._currentBlog.PostedOn = new Date();
        this.blogService.post(this._currentBlog).subscribe((data: any) => {
            this._showForm = false;
            this.getAllBlogs();
        });
    }

    public getBlogInfo(blogId: number, forEdit: boolean = false) {
        this.blogService.get(blogId).subscribe((data: IBlog) => {
            this._showForm = true;
            this._currentBlog = data;
        }, (err) => {
            // this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    private _editBlog(blog) {
        this._showForm = true;
        this._currentBlog = blog;
    }

    private _deleteBlog(blog) {
        this.blogService.delete(blog.Id).subscribe(() => {
            window.location.reload();
        }, (err) => {
            // this.errorMessage = `There was some problem when trying to delete data`;
        });
    }

    private _toggleForm() {
        if (this._showForm) {
            this._currentBlog = {} as IBlog;
            this._panelSetup.isFormPanelOpen = true;
        }
        this._showForm = !this._showForm;
    }

    private _togglePanel(panel: string): void {
        switch (panel) {
            case 'blog': this._panelSetup.isBlogPanelOpen = !this._panelSetup.isBlogPanelOpen;
                break;
            case 'form':
                this._panelSetup.isFormPanelOpen = !this._panelSetup.isFormPanelOpen;
                break;
            default:
                this._panelSetup.isExpandedView = !this._panelSetup.isExpandedView;
        }
    }

    public filterByCategory(category): void {
        this._filter.category = category;
        this._filter.isFiltered = true;
        this._filter.filterText = `Filtered by: ${category}`;
        this._blogs = this._allBlogData.filter(x => x.Category === category);
    }

    public removeFilter(): void {
        this._filter.isFiltered = false;
        this._filter.category = '';
        this._filter.filterText = '';
        this._blogs = this._allBlogData;
    }
}
