import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { MenuService, PageService } from '../../../services/base.service';
import { IPage, ITemplate } from '../../../models/models';
import { Links } from '../../../assets/links';
import { templates } from '../../constants/templates';
import { IMenu } from '../../../models/models';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    providers: [MenuService, PageService]
})
export class PageComponent implements OnInit {
    logoLink = Links.ImageLinks.Logo;
    public editorValue = '';
    public display = true;
    public footer;
    public eachFooterSize: string;
    private _allMenus: IMenu[] = [];
    public pageLayout: string;
    constructor(private _menuService: MenuService, private _pageService: PageService) {
        const that = this;
        // this.footer = footer;
        // this.eachFooterSize = `col-sm-${12 / footer.contentCount}`;
    }

    ngOnInit() {
        const that = this;
        that.handlePageLoad();
        window.addEventListener('hashchange', function () {
            that.handlePageLoad();
        });
    }

    handlePageLoad() {
        if (window.location.hash !== '#/venus') {
            this.display = false;
            this.getPage();
        } else {
            this.display = true;
            this.pageLayout = templates[0].content;
        }
    }

    toggleMenu() {
        if (document.getElementsByClassName('in').length > 0) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    getPage() {
        const url = window.location.hash;
        this._pageService.getAll().subscribe((pages: IPage[]) => {
            const desiredPage = pages.filter(x => x.Menu === url.split('#/venus/')[1]);
            if (desiredPage.length > 0 && pages.length > 0) {
                this.pageLayout = desiredPage[0].Content;
            } else {
                this.getErrorTemplate();
            }
        }, (err) => { this.getErrorTemplate(); });
    }

    getErrorTemplate() {
        this.pageLayout = '';
    }
}
