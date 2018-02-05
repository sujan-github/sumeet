import { Component, OnInit } from '@angular/core';
import { IPage, IMenu } from '../../../models/models';
import { PageService, MenuService } from '../../../services/base.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    moduleId: module.id,
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    providers: [PageService, MenuService],
})

export class AdminComponent {
  constructor() {}

}
