import { Component, OnInit } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'app-our-team',
    templateUrl: './ourTeam.component.html',
})
export class OurTeamComponent implements OnInit {
    title = 'Our Medical Team';
    public editorValue = '';

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
