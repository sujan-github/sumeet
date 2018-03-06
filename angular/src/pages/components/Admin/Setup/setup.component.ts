import { Component, OnInit } from '@angular/core';
import { ISetup, IUser } from '../../../../models/models';
import { SetupService, UserService } from '../../../../services/base.service';
import { DomSanitizer } from '@angular/platform-browser';
import { starterTemplates } from '../../../../constants/templates';
import { DomGenerator } from '../../../../constants/templates';
import { Constants } from '../../../../constants/constants';
@Component({
    moduleId: module.id,
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    providers: [SetupService, UserService],
})

export class SetupComponent implements OnInit {
    public errorMessage: String = '';
    public setupObj: ISetup = {} as ISetup;
    private _noData: Boolean = false;
    private _user: IUser;
    constructor(public sanitizer: DomSanitizer, public _service: SetupService, public _userService: UserService) { }

    ngOnInit() {
        this._user = Constants.LocalStorage.getUserInfo();
        if (this._user === null) {
            location.href = '#/admin/login';
        }
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

    editPassword() {
        this._userService.post(this._user).subscribe((data) => {
            debugger;
            Constants.LocalStorage.addUserInfo(data);
            location.reload();
        });
    }
}
