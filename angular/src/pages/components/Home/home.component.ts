import { Component, OnInit } from '@angular/core';
import { Links } from '../../../assets/links';
import { footer } from './home.constants';
import { IMenu } from '../../../models/models';
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
})
export class HomeComponent implements OnInit {
  title = 'Article Editor';
  logoLink = Links.ImageLinks.Logo;
  public editorValue = '';
  public display = true;
  public footer;
  public eachFooterSize: string;
  private _allMenus: IMenu[] = [];
  public pageLayout: string;
  constructor() {
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
  }

  toggleMenu() {
    if (document.getElementsByClassName('in').length > 0) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
}
