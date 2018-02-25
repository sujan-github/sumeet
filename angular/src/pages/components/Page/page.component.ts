import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { MenuService, PageService, SetupService } from '../../../services/base.service';
import { IPage, ITemplate, ISetup } from '../../../models/models';
import { Links } from '../../../assets/links';
import { IMenu } from '../../../models/models';
import { DomGenerator } from '../../../constants/templates';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    providers: [MenuService, PageService, SetupService]
})
export class PageComponent implements OnInit {
    logoLink = Links.ImageLinks.Logo;
    public editorValue = '';
    public isHomePage = true;
    public footer;
    public eachFooterSize: string;
    private _allMenus: IMenu[] = [];
    public pageLayout: string;
    public setup: ISetup;
    public homeStyle = '';
    public menuBackground = '';
    constructor(private _menuService: MenuService, private _pageService: PageService, private _setupService: SetupService) {
        const that = this;
    }

    ngOnInit() {
        const that = this;
        that.handlePageLoad();
        this.loadSetup();
        window.addEventListener('hashchange', function () {
            that.handlePageLoad();
        });
    }

    loadSetup() {
        if (localStorage.length <= 1) {
            this._setupService.getAll().subscribe((data) => {
                if (data.length > 0) {
                    this.setup = data[0];
                    for (const key in this.setup) {
                        localStorage.setItem(key, this.setup[key]);
                    }
                    this._setupComponents();
                }
            });
        } else {
            this._setupComponents();
        }
    }

    private _setupComponents() {
        this.footer = DomGenerator.GenerateFooter(localStorage.getItem('ContactSection'));
    }
    handlePageLoad() {
        if (window.location.hash !== '#/venus' && window.location.hash !== '#/venus/home') {
            this.isHomePage = false;
            this.getPage();
        } else {
            this.isHomePage = true;
            if (localStorage.getItem('ContactSection')) {
                this.footer = DomGenerator.GenerateFooter(localStorage.getItem('ContactSection'));
                this.pageLayout = localStorage.getItem('HomeSection');
                this.homeStyle = `url(${localStorage.getItem('CarouselImage')})`;
                this.menuBackground = localStorage.getItem('MenuBgColor');
            }
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
