import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-initial-diagnosis',
    templateUrl: './initialDiagnosis.component.html',
    styles: [
        'section p {color: darkslategray;}',
        '.article-header {text-align: center;}',
    ],
})
export class InitialDiagnosisComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
