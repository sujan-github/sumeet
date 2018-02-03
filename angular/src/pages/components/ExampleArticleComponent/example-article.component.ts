import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../../models/models';
import { ArticleService } from '../../../services/base.service';

@Component({
    moduleId: module.id,
    selector: 'app-example-article',
    template: `
      <ul>
        <li *ngFor="let item of articleList">{{item.Heading}}</li>
      </ul>
    `,
    providers: [ArticleService]
})
export class ExampleArticleComponent implements OnInit {
    title = 'Article Editor';
    articleList: IArticle[] = [];

    public editorValue = '';

  constructor(
    public articleService: ArticleService
  ) {
    console.log(window.location.host);
    console.log(window.location.protocol);
  }

    ngOnInit() {

      this.getAllArticle();
    }

    getAllArticle() {
      this.articleService.getAll().subscribe((data: IArticle[]) => {
        this.articleList = data;
      });

    }
}
