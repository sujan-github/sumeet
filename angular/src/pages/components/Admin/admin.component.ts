import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../models/models';
import { AuthenticationService } from '../../../services/base.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [AuthenticationService]
})

export class AdminComponent {
  userInfo: IUser = <IUser>(JSON.parse(localStorage.getItem('UserInfo')));

  constructor(
    public router: Router,
    public authenticationService: AuthenticationService
  ) {
    this.userInfo = <IUser>(JSON.parse(localStorage.getItem('UserInfo')));
    console.log(<IUser>(JSON.parse(localStorage.getItem('UserInfo'))));
    if (this.userInfo != null) {
      this.router.navigateByUrl('admin/article-editor');
    } else {
      this.router.navigateByUrl('admin/login');
    }
  }

  logout() {
    this.authenticationService.logout();
  }
}
