import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-iui-procedure',
    templateUrl: './iuiProcedure.component.html',
    styles: [
        'section p {color: darkslategray;}',
        '.article-header {text-align: center;}',
    ],
})
export class IuiProcedureComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
