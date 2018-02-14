import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-icsi',
    templateUrl: './icsi.component.html',
    styles: [
        'section p {color: darkslategray;}',
        '.article-header {text-align: center;}',
    ],
})
export class IcsiComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
