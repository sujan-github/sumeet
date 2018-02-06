import { Component, OnInit } from '@angular/core';
import { IPage, IMenu, ITemplate } from '../../../models/models';
import { PageService, MenuService, TemplateService } from '../../../services/base.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    moduleId: module.id,
    selector: 'app-article-editor',
    templateUrl: './articleEditor.component.html',
    styleUrls: ['./articleEditor.component.css'],
    providers: [PageService, MenuService, TemplateService],
})

export class ArticleEditorComponent implements OnInit {
    public title = 'All Pages';
    private _tempMenus: IMenu[] = [];
    public errorMessage: String = '';
    public pages: IPage[] = [];
    public menus: IMenu[] = [];

    public onChangingProgress: Boolean = false;
    public currentMenu: IMenu = {} as IMenu;
    // use to hold object of the page object that is currently in progress of adding or updating
    public currentPage: IPage = {} as IPage;
    public sideBarExpanded: Boolean = false;
    public showPreview: Boolean = false;
    public tableView: Boolean = false;
    public templatesMenuActive: Boolean = false;
    public selectedTemplate: ITemplate = {} as ITemplate;
    public templateFormOpen: Boolean = false;
    public currentTemplate: ITemplate = {} as ITemplate;
    public currentPreview: String = '';
    public fetchedTemplates: ITemplate[] = [];

    constructor(public sanitizer: DomSanitizer, public menuService: MenuService, public pageService: PageService,
        public templateService: TemplateService) { }
    ngOnInit() {
        this.getAllPages();
        this.getAllMenus();
        this.getAllTemplates();
    }

    public getAllPages() {
        this.pageService.getAll().subscribe((data: IPage[]) => {
            this.pages = data;
        }, (err) => {
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public getAllMenus() {
        this.menuService.getAll().subscribe((data: IMenu[]) => {
            this.menus = data;
            this._tempMenus = data;
            this.menus.unshift({ Id: 0, Name: 'Select a Parent', ParentId: 0, Url: '' });
        }, (err) => {
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public getAllTemplates() {
        this.templateService.getAll().subscribe((data: ITemplate[]) => {
            this.fetchedTemplates = data;
        }, (err) => {
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public savePage() {
        this.currentMenu.Url = ``;
        this.currentMenu.ParentId = this.currentMenu.ParentId > 0 ? this.currentMenu.ParentId : 0;
        this.menuService.post(this.currentMenu).subscribe((data: any) => {
            this.currentPage.MenuId = data.inserted_id;
            this.currentPage.Menu = this.currentMenu.Name;
            this.pageService.post(this.currentPage).subscribe((page: IPage) => {
                this.onChangingProgress = false;
                this.getAllMenus();
                this.getAllPages();
                this.setTitle();
            });
        });
    }

    public getPageInfo(pageId: number, forEdit: boolean = false) {
        this.pageService.get(pageId).subscribe((data: IPage) => {
            this.onChangingProgress = true;
            this.currentPage = Array.isArray(data) ? data[0] : data;
            this.currentMenu = this.menus.filter(x => x.Id === this.currentPage.MenuId)[0];
            this.menus.splice(this.menus.indexOf(this.currentMenu), 1);
            this.setTitle(this.currentPage.PageTitle);
        }, (err) => {
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public deletePage() {
        this.pageService.delete(this.currentPage.Id).subscribe(() => {
            this.menuService.delete(this.currentPage.MenuId).subscribe(() => {
                this.onChangingProgress = false;
                this.getAllMenus();
                this.getAllPages();
                this.setTitle();
            }, (err) => {
                this.errorMessage = `There was some problem when trying to delete data`;
            });
        }, (err) => {
            this.errorMessage = `There was some problem when trying to delete data`;
        });
    }

    public toggleForm() {
        if (this.onChangingProgress) {
            this.currentPage = {} as IPage;
            this.currentMenu = {} as IMenu;
        }
        this.onChangingProgress = !this.onChangingProgress;
        this.setTitle();
        this.templateMenuSelected(false);
    }

    public templateSelected(template) {
        this.templateFormOpen ? this.currentTemplate.InnerHtml = template : this.currentPage.Content = template;
    }

    private _createMenuHierachyTree() {
        const allMenus: IMenu[] = this.menus;
    }

    public toggleSideBar() {
        document.getElementById('mySidenav').style.width = this.sideBarExpanded ? '0' : '300px';
        this.sideBarExpanded = !this.sideBarExpanded;
    }

    public togglePreview() {
        debugger;
        this.showPreview = !this.showPreview;
        this.currentPreview = this.templateFormOpen ? this.currentTemplate.InnerHtml : this.currentPage.Content;
        if (this.sideBarExpanded) {
            this.toggleSideBar();
        }
    }

    public showTableView(show) {
        this.tableView = show;
        this.currentPage = {} as IPage;
        this.currentTemplate = {} as ITemplate;
        this.currentMenu = {} as IMenu;
        this.onChangingProgress = false;
        this.setTitle();
        this.templateMenuSelected(false);
    }

    public setTitle(editPageTitle?) {
        if (editPageTitle) {
            this.title = `Edit ${editPageTitle}`;
        } else {
            if (this.onChangingProgress) {
                this.title = 'Add New Page';
            } else {
                this.title = 'All Pages';
            }
        }
    }

    public templateMenuSelected(active) {
        this.templatesMenuActive = active;
        if (active) {
            this.sideBarExpanded = true;
            this.toggleSideBar();
            this.title = 'Templates';
            this.templateFormOpen = false;
            this.currentTemplate = {} as ITemplate;
        }
    }

    public getTemplateInfo(id) {
        this.templatesMenuActive = true;
        this.currentTemplate = this.fetchedTemplates.filter(x => x.Id === id)[0];
        this.toggleTemplateForm();
        this.title = `Edit ${this.currentTemplate.Name}`;
    }

    public toggleTemplateForm() {
        this.templateFormOpen = !this.templateFormOpen;
        this.templatesMenuActive = true;
        if (this.templateFormOpen) {
            this.title = 'Add New Template';
        }
    }

    public saveTemplate() {
        this.currentTemplate.IsBlog = false;
        this.templateService.post(this.currentTemplate).subscribe((data) => {
            this.getAllTemplates();
            this.toggleTemplateForm();
        });
    }

    public deleteTemplate() {
        this.templateService.delete(this.currentTemplate.Id).subscribe(() => {
            this.getAllTemplates();
            this.toggleTemplateForm();
        }, (err) => {
            this.errorMessage = `There was some problem when trying to delete data`;
        });
    }
}
