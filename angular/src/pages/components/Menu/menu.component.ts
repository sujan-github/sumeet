import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from '../../../models/models';
import { MenuService } from '../../../services/base.service';
import { Constants } from '../../../constants/constants';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    providers: [MenuService],
})
export class MenuComponent implements OnInit {
    @Input() menus: IMenu[];
    @Input() isRoot: boolean;
    private _allMenus: IMenu[];
    linkColor: string;
    constructor(private _menuService: MenuService) {
        this.isRoot = true;
    }

    ngOnInit() {
        if (Constants.LocalStorage.hasSetup()) {
            const setup = Constants.LocalStorage.getSetup();
            if (setup.MenuTextColor !== null && setup.MenuTextColor !== '' && typeof (setup.MenuTextColor) !== 'undefined') {
                this.linkColor = setup.MenuTextColor;
            }
        }
        if (typeof (this.menus) === 'undefined' || this.isRoot) {
            this.getMenus();
        } else {
            if (this.menus.length > 0) {
                this.isRoot = this.menus[0].ParentId.toString() === '0';
            }
        }
    }

    getMenus() {
        this._menuService.getAll().subscribe((menus) => {
            this._allMenus = menus;
            this.menus = this.getMenuHierarchy();
        });
    }

    getMenuHierarchy(parentId: number = 0): IMenu[] {
        const parents: IMenu[] = this._allMenus.filter(m => (m.ParentId == null ? '0' : m.ParentId.toString()) === parentId.toString());
        parents.forEach((parent) => {
            parent.children = this.getMenuHierarchy(parent.Id);
        });
        return parents;
    }

    hasChildren(menu: IMenu) {
        if (typeof (menu) === 'undefined' || typeof (menu.children) === 'undefined') {
            return false;
        }
        return menu.children.length > 0;
    }

    go(menu: IMenu) {
        if (!this.hasChildren(menu)) {
            window.location.href = menu.Url;
        }
    }
}
