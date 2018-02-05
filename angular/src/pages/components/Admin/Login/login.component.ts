import { Component, OnInit } from '@angular/core';
import { IPage, IMenu } from '../../../../models/models';
import { PageService, MenuService } from '../../../../services/base.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'app-admin',
    templateUrl: './login.component.html',
    providers: [PageService, MenuService],
})
export class LoginComponent {
  constructor() {}

}
