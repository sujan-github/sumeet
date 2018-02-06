import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/base.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [BlogService]
})
export class HomeComponent implements OnInit {
  title = 'Article Editor';
  public editorValue = '';

  constructor(
    public articleService: BlogService
  ) {
    console.log(window.location.host);
    console.log(window.location.protocol);
  }

  ngOnInit() {
    window.addEventListener('hashchange', function () {
      if (window.location.hash === '#/home') {
        window.location.href = '#/about/our-practice';
      }
    });
  }
}
