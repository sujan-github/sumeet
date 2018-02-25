import { Component, OnInit } from '@angular/core';
import { ISetup } from '../../../../models/models';
import { SetupService } from '../../../../services/base.service';
import { DomSanitizer } from '@angular/platform-browser';
import { footer, starterTemplates } from '../../../../constants/templates';
import { DomGenerator } from '../../../../constants/templates';
@Component({
    moduleId: module.id,
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    providers: [SetupService],
})

export class SetupComponent implements OnInit {
    public errorMessage: String = '';
    public setupObj: ISetup = {} as ISetup;
    private _noData: Boolean = false;
    constructor(public sanitizer: DomSanitizer, public _service: SetupService) { }

    ngOnInit() {
        this.getExistingSetups();
    }

    public getExistingSetups() {
        debugger;
        this._service.getAll().subscribe((data: ISetup[]) => {
            if (data.length > 0) {
                this.setupObj = data[0];
            } else {
                this._noData = true;
                this.setupObj.HomeSection = starterTemplates[0].InnerHtml;
                footer.sectionContent.forEach((section) => {
                    this.setupObj.ContactSection += section.InnerHtml;
                });
            }
        }, (err) => {
            this.setupObj.HomeSection = starterTemplates[0].InnerHtml;
                footer.sectionContent.forEach((section) => {
                    this.setupObj.ContactSection += section.InnerHtml;
                });
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public save() {
        this._service.post(this.setupObj).subscribe((success) => {
        }, err => { this.errorMessage = err; });
    }
}
