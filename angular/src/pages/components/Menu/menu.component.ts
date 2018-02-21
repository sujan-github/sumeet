import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from '../../../models/models';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
    @Input() menus: IMenu[];
    public isRoot: boolean;
    constructor() {
        this.isRoot = true;
    }

    ngOnInit() {
        if (typeof (this.menus) === 'undefined') {
            this.isRoot = false;
        } else {
            if (this.menus.length > 0) {
                this.isRoot = this.menus[0].ParentId === 0;
            }
        }
    }

    hasChildren(menu: IMenu) {
        if (typeof (menu) === 'undefined' || typeof (menu.children) === 'undefined') {
            return false;
        }
        return menu.children.length > 0;
    }
    go(menu: IMenu) {
        debugger;
        if (!this.hasChildren(menu)) {
            window.location.href = menu.Url;
        }
    }
}
