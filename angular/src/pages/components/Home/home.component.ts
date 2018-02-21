import { Component, OnInit } from '@angular/core';
import { Links } from '../../../assets/links';
import { footer, sampleMenus } from './home.constants';
import { IMenu } from '../../../models/models';
import { MenuService } from '../../../services/base.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    'section p {color: darkslategray;}',
    'li > p {color: white;}',
    'li > i {color: rgb(55,55,110); width:1.5em;}',
    'p.details > i {color: rgb(55,55,110); width:1.5em;}',
    'h4 {font-weight: bold;}',
    '.footer_widget p {max-width: 100%;}',
  ],
  providers: [MenuService],
})
export class HomeComponent implements OnInit {
  title = 'Article Editor';
  logoLink = Links.ImageLinks.Logo;
  public editorValue = '';
  public display = true;
  public footer;
  public eachFooterSize: string;
  private _allMenus: IMenu[] = [];
  public arrangedMenus: IMenu[] = [];
  public menuLayout: string;
  constructor(private _menuService: MenuService) {
    const that = this;
    if (window.location.hash !== '#/venus') {
      that.display = false;
    } else {
      that.display = true;
    }
    this.footer = footer;
    this.eachFooterSize = `col-sm-${12 / footer.contentCount}`;
  }

  ngOnInit() {
    const that = this;
    window.addEventListener('hashchange', function () {
      if (window.location.hash !== '#/venus') {
        that.display = false;
      } else {
        that.display = true;
      }
    });
    this.getAllMenus();
  }

  getAllMenus() {
    this.arrangedMenus =  sampleMenus;
    // this._menuService.getAll().subscribe((menus) => {
    //   if (menus.length > 0) {
    //     this._allMenus = menus;
    //     this._arrangedMenus = this.getMenuHierarchy();
    //     this.menuLayout = this.generateMenuHtml(this._arrangedMenus);
    //   } else {
    //     this.menuLayout = sampleMenuLayout;
    //   }
    // }, err => this.menuLayout = sampleMenuLayout);
  }

  getMenuHierarchy(parentId: number = 0): IMenu[] {
    const parents: IMenu[] = this._allMenus.filter(m => m.ParentId === parentId);
    parents.forEach((parent) => {
      parent.children = this.getMenuHierarchy(parent.Id);
    });
    return parents;
  }

  generateMenuHtml(children: IMenu[], rootUl: boolean = false): string {
    let list = '';
    children.forEach(menu => {
      let childList = '';
      if (menu.children.length > 0) {
        childList = this.generateMenuHtml(menu.children, menu.children.length > 0);
      }
      list += this.getLi(menu, childList, menu.children.length > 0);
    });
    return this.getUl(list, rootUl);
  }

  getUl(li: string, hasChildren: boolean = false) {
    return `<ul class="${hasChildren ? 'dropdown-menu' : 'nav nav-ivf navbar-nav'}">${li}</ul>`;
  }

  getLi(menu: IMenu, childLists: string, hasChildren: boolean = false) {
    return `<li class="${hasChildren ? 'dropdown' : ''} ">
      <a href = "${hasChildren ? 'javascript:void(0)' : menu.Url}" ${
      (menu.children) ?
        'class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"'
        : ''
      } > ${menu.Name} ${menu.children ? `<span class="caret"></span>` : ''} </a>${childLists} </li > `;
  }

  toggleMenu() {
    if (document.getElementsByClassName('in').length > 0) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  menuClicked() {
    alert();
  }
}
