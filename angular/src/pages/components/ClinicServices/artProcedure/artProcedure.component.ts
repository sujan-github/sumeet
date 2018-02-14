import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-art-procedure',
    templateUrl: './artProcedure.component.html',
    styles: [
        'section p {color: darkslategray;}',
        '.article-header {text-align: center;}'
    ],
})
export class ArtProcedureComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
