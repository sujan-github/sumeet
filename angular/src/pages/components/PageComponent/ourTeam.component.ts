import { Component, OnInit } from '@angular/core';
import { Links } from '../../../assets/links';
@Component({
    moduleId: module.id,
    selector: 'app-our-team',
    templateUrl: './ourTeam.component.html',
    styleUrls: ['./ourTeam.component.css'],
})
export class OurTeamComponent implements OnInit {
    title = 'Our Medical Team';
    swastiSharmaImage = Links.ImageLinks.SwastiSharma;
    public editorValue = '';

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
