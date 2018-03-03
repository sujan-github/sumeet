import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { MenuService, PageService, SetupService } from '../../../services/base.service';
import { IPage, ITemplate, ISetup } from '../../../models/models';
import { Links } from '../../../assets/links';
import { IMenu } from '../../../models/models';
import { DomGenerator } from '../../../constants/templates';
import { Constants } from '../../../constants/constants';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    providers: [MenuService, PageService, SetupService]
})

export class PageComponent implements OnInit {
    logoLink = Links.ImageLinks.Logo;
    public editorValue = '';
    public page = Constants.Page.HomePage;
    public footer;
    public eachFooterSize: string;
    private _allMenus: IMenu[] = [];
    public pageLayout: string;
    public homeStyle = '';
    public carouselHeader1 = 'VENUS IVF CENTER';
    public carouselHeader2 = 'ALL YOUR FERTILITY NEEDS UNDER ONE ROOF';
    public menuBackground = '';
    constructor(private _menuService: MenuService, private _pageService: PageService, private _setupService: SetupService) {
        const that = this;
    }

    ngOnInit() {
        Constants.LocalStorage.hasSetup();
        const that = this;
        this.loadSetup().then(() => {
            that.handlePageLoad();
        });
        window.addEventListener('hashchange', function () {
            that.handlePageLoad();
        });
    }

    loadSetup(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            // if (!Constants.LocalStorage.hasSetup()) {
            this._setupService.getAll().subscribe((data) => {
                if (data.length > 0) {
                    const setup = data[data.length - 1];
                    if (!Constants.LocalStorage.hasSetup() || Constants.LocalStorage.getSetup().ModifiedCount !== setup.ModifiedCount) {
                        Constants.LocalStorage.setSetup(data[data.length - 1]);
                    }
                }
                this._setupComponents();
                resolve();
            });
        });
    }

    private _setupComponents() {
        const setup = Constants.LocalStorage.getSetup();
        this.footer = DomGenerator.GenerateFooter(setup.ContactSection);
        if (setup.CarouselImage !== null && setup.CarouselImage !== '' && typeof (setup.CarouselImage) !== 'undefined') {
            this.homeStyle = `url('${setup.CarouselImage}') no-repeat 100% 100%`;
        }
        if (setup.CarouselText !== null && setup.CarouselText !== '' && typeof (setup.CarouselText) !== 'undefined') {
            const text = DomGenerator.GenerateCarouselText(setup.CarouselText);
            if (text.length > 0) {
                this.carouselHeader1 = text[0];
                if (text.length > 1) {
                    this.carouselHeader2 = text[1];
                }
            }
        }
        if (setup.MenuBgColor !== null && setup.MenuBgColor !== '' && typeof (setup.MenuBgColor) !== 'undefined') {
            this.menuBackground = setup.MenuBgColor;
        }
    }

    handlePageLoad() {
        if (window.location.hash === Constants.Page.GetPageLink(Constants.Page.HomePage)) {
            const setup = Constants.LocalStorage.getSetup();
            this.pageLayout = setup.HomeSection;
        } else if (window.location.hash === Constants.Page.GetPageLink(Constants.Page.BlogPage)) {
            this.page = Constants.Page.BlogPage;
        } else {
            this.page = Constants.Page.OtherPage;
            this.getPage();
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

    isPage(page: string) {
        return this.page === page;
    }

    getErrorTemplate() {
        this.pageLayout = '';
    }
}
