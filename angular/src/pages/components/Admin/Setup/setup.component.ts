import { Component, OnInit } from '@angular/core';
import { ISetup } from '../../../../models/models';
import { SetupService } from '../../../../services/base.service';
import { DomSanitizer } from '@angular/platform-browser';
import { starterTemplates } from '../../../../constants/templates';
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
        this._service.getAll().subscribe((data: ISetup[]) => {
            if (data.length > 0) {
                this.setupObj = data[0];
            } else {
                this._noData = true;
                this.setupObj.HomeSection = starterTemplates[0].InnerHtml;
                this.setupObj.ContactSection += starterTemplates.filter(x => x.Name === 'Footer')[0].InnerHtml;
            }
        }, (err) => {
            this.setupObj.HomeSection = starterTemplates[0].InnerHtml;
            this.setupObj.ContactSection += starterTemplates.filter(x => x.Name === 'Footer')[0].InnerHtml;
            this.errorMessage = `There was some problem when trying to retrieve data.`;
        });
    }

    public save() {
        this.setupObj.TopHeaderSection = DomGenerator.GenerateTopHeader(this.setupObj.TopHeaderBgColor,
            this.setupObj.Logo, this.setupObj.ContactNumbers, this.setupObj.SocialLinks);
        if (this.setupObj.ModifiedCount != null) {
            this.setupObj.ModifiedCount = this.setupObj.ModifiedCount + 1;
        } else {
            this.setupObj.ModifiedCount = 0;
        }
        this._service.post(this.setupObj).subscribe((success) => {
        }, err => { this.errorMessage = err; });
    }
}
