import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['section p {color: darkslategray;}'],
})
export class HomeComponent implements OnInit {
  title = 'Article Editor';
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
