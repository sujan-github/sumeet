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
    VishnukanthDeeneImage = Links.ImageLinks.VishnukanthDeene;
    anupamaGurungImage = Links.ImageLinks.AnupamaGurung;
    public editorValue = '';

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
