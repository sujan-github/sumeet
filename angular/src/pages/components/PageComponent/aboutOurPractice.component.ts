import { Component, OnInit } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'app-about-practice',
    templateUrl: './aboutOurPractice.component.html',
    styleUrls: ['./aboutOurPractice.component.css'],
})
export class AboutPracticeComponent implements OnInit {
    title = 'About Our Practice';
    public editorValue = '';

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
