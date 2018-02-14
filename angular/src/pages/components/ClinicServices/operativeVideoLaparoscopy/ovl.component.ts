import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-ovl',
    templateUrl: './ovl.component.html',
    styles: [
        'section p {color: darkslategray;}',
        '.article-header {text-align: center;}',
    ],
})
export class OvlComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
