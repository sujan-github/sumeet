import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  title = 'Article Editor';
  public editorValue = '';

  constructor(
  ) {
    console.log(window.location.host);
    console.log(window.location.protocol);
  }

  ngOnInit() {
    window.addEventListener('hashchange', function () {
      if (window.location.hash === '#/about') {
        window.location.href = '#/about/our-practice';
      }
    });
  }
}
