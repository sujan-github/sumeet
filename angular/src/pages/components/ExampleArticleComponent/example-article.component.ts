import { Component, OnInit } from '@angular/core';
import { IBlog } from '../../../models/models';
import { BlogService } from '../../../services/base.service';

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
    providers: [BlogService]
})
export class ExampleArticleComponent implements OnInit {
    title = 'Example Article Editor';
    articleList: IBlog[] = [];
    inputArticle: IBlog = <IBlog>{};

    public editorValue = '';

  constructor(
    public articleService: BlogService
  ) {
    console.log(window.location.host);
    console.log(window.location.protocol);
  }

    ngOnInit() {

      this.getAllArticle();
    }

    getAllArticle() {
      this.articleService.getAll().subscribe((data: IBlog[]) => {
        this.articleList = data;
      });

    }

    save() {
      this.articleService.post(this.inputArticle).subscribe((data: IBlog) => {
        alert('done');
      });
    }
}
