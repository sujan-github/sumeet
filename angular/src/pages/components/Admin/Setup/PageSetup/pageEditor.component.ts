import { Component, OnInit } from '@angular/core';
import { IPage, IMenu, ITemplate } from '../../../../../models/models';
import { PageService, MenuService, TemplateService } from '../../../../../services/base.service';
import { DomSanitizer } from '@angular/platform-browser';
import { starterTemplates } from '../../../../../constants/templates';
import { Constants } from '../../../../../constants/constants';

@Component({
    moduleId: module.id,
    selector: 'app-page-editor',
    templateUrl: './pageEditor.component.html',
    providers: [PageService, MenuService, TemplateService],
})

export class PageEditorComponent implements OnInit {
    public pages: IPage[] = [];
    public menus: IMenu[] = [];
    private _currentPage: IPage = <IPage>{};
    private _currentMenu: IMenu = <IMenu>{};
    public fetchedTemplates: ITemplate[] = [];
    public defaultTemplates: ITemplate[] = starterTemplates;
    private _arrangedMenus: IMenu[] = [];
    private selectedMenu: IMenu = <IMenu>{};
    private _showForm: boolean;
    private _previewHtml: string;
    _showPreview: boolean;
    constructor(public sanitizer: DomSanitizer, public menuService: MenuService, public pageService: PageService,
        public templateService: TemplateService) {
        this.defaultTemplates = starterTemplates;
        this._showForm = false;
        this._previewHtml = '';
        this._showForm = false;
    }

    ngOnInit() {
        this.getAllTemplates();
        this.getAllPages().then((pages) => {
            this.pages = pages;
            this.getAllMenus();
        });
    }

    public getAllPages(): Promise<IPage[]> {
        return new Promise<IPage[]>((resolve, reject) => {
            this.pageService.getAll().subscribe((data: IPage[]) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }

    public getAllMenus() {
        this.menuService.getAll().subscribe((data: IMenu[]) => {
            this.menus = data;
            this._arrangedMenus = this._getMenuHierarchy();
            this.menus.unshift({ Id: 0, ParentId: 0, Name: 'Select a parent', Url: '' });
            this.rootSelected();
        }, (err) => {
        });
    }

    private _getMenuHierarchy(parentId: number = 0): IMenu[] {
        const parents: IMenu[] = this.menus.filter(x => x.ParentId.toString() === parentId.toString());
        if (parents.length > 0) {
            parents.forEach((parent: IMenu) => {
                const page = this.pages.find(x => x.MenuId === parent.Id);
                parent.page = [];
                if (page !== undefined) {
                    parent.page.push(page);
                }
                parent.children = this._getMenuHierarchy(parent.Id);
            });
        }
        return parents;
    }

    public getAllTemplates() {
        this.templateService.getAll().subscribe((data: ITemplate[]) => {
            this.fetchedTemplates = data;
        }, (err) => {
        });
    }

    _toggleForm(): void {
        this._showForm = !this._showForm;
        this.pageChosen();
    }

    menuSelected(menu: IMenu): void {
        if (menu) {
            this.selectedMenu = menu;
            this.pageChosen();
        } else {
            this.rootSelected();
        }
    }

    rootSelected(): void {
        this.selectedMenu = {
            Id: 0,
            Name: 'Root',
            children: this._arrangedMenus,
            ParentId: 0,
            Url: ''
        };
        this.pageChosen();
    }

    pageChosen(page?: IPage) {
        if (page) {
            const menu = this.menus.filter(x => x.Id.toString() === page.MenuId.toString());
            if (menu.length > 0) {
                this._currentMenu = menu[0];
            }
            this._currentPage = page;
        } else {
            this._currentPage = <IPage>{};
            this._currentMenu = <IMenu>{};
            this._currentMenu.ParentId = this.selectedMenu.Id;
        }
    }

    save() {
        if (this._currentPage.Id < 1) {
            this._currentMenu.Id = 0;
            this._currentPage.Id = 0;
        }
        this._currentMenu.Name = this._currentPage.PageTitle;
        if (this._currentMenu.ParentId > 0) {
            this._currentMenu.Url = `${this.menus.filter(x => x.Id === this._currentMenu.ParentId)[0].Url}/${this._currentPage.PageTitle}`;
        } else {
            this._currentMenu.Url = `${Constants.linkPrefix}/${this._currentPage.PageTitle}`;
        }
        this._currentPage.Menu = this._currentPage.PageTitle;
        this.menuService.post(this._currentMenu).subscribe((menu) => {
            this._currentPage.MenuId = <number>menu.inserted_id;
            this.pageService.post(this._currentPage).subscribe((page) => {
                this._toggleForm();
                this.getAllPages();
            });
        });
    }

    editPage(menu) {
        this._toggleForm();
        this.pageChosen(menu.page[0]);
    }

    deletePage(menu) {
        if (menu.page.length > 0) {
            this.pageService.delete(menu.page[0].Id).subscribe(() => {
                this.menuService.delete(menu.Id).subscribe(() => {
                    window.location.reload();
                });
            });
        } else {
            this.menuService.delete(menu.Id).subscribe(() => {
                window.location.reload();
            });
        }
    }

    preview(menu: IMenu) {
        if (menu) {
            this._previewHtml = menu.page[0].Content;
            this._showPreview = true;
        } else {
            this._showPreview = false;
            this._previewHtml = '';
        }
    }

    htmlChanged(html) {
        this._currentPage.Content = html;
    }

    _selectTemplate(template: ITemplate) {
        this._currentPage.Content = template.InnerHtml;
    }
}
