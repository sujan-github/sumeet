import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../../models/models';
import { ArticleService } from '../../../services/base.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  title = 'Article Editor';
  public editorValue = '';

  constructor(
    public articleService: ArticleService
  ) {
    console.log(window.location.host);
    console.log(window.location.protocol);
  }

  ngOnInit() {
  }
}
