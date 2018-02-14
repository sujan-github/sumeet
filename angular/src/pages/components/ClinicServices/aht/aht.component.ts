import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-aht',
    templateUrl: './aht.component.html',
    styles: [
        'section p {color: darkslategray;}',
        '.article-header {text-align: center;}'],
})
export class AhtComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
