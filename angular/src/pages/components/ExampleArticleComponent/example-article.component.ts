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
      <div>
        <div>
          Name:
          <input [(ngModel)]="inputArticle.Heading" >
        </div>
        <button type="submit" (click)="save()">Save</button>
      </div>
    `,
    providers: [ArticleService]
})
export class ExampleArticleComponent implements OnInit {
    title = 'Example Article Editor';
    articleList: IArticle[] = [];
    inputArticle: IArticle = <IArticle>{};

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

    save() {
      this.articleService.post(this.inputArticle).subscribe((data: IArticle) => {
        alert('done');
      });
    }
}
