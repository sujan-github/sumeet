import { Component, OnInit } from '@angular/core';
import { Links } from '../../../assets/links';

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

  constructor() {
    const that = this;
    if (window.location.hash !== '#/home') {
      that.display = false;
    } else {
      that.display = true;
    }
  }

  ngOnInit() {
    const that = this;
    window.addEventListener('hashchange', function () {
      if (window.location.hash !== '#/home') {
        that.display = false;
      } else {
        that.display = true;
      }
    });
  }
}
