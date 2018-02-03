import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'article-editor',
    templateUrl: './articleEditor.component.html',
    styleUrls: ['./articleEditor.component.css']
})
export class ArticleEditorComponent implements OnInit {
    title = 'Article Editor';

    public editorValue = '';

    ngOnInit() { }
}
