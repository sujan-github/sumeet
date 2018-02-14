import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-pigs',
    templateUrl: './pigs.component.html',
    styles: [
        'section p {color: darkslategray;}',
        '.article-header {text-align: center;}',
    ],
})
export class PreImplantationGeneticScreeningComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
