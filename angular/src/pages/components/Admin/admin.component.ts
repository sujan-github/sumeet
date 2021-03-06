import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../models/models';
import { AuthenticationService } from '../../../services/base.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: ['p {color: darkslategray;}'],
  providers: [AuthenticationService]
})

export class AdminComponent implements OnInit {
  userInfo: IUser = <IUser>(JSON.parse(localStorage.getItem('UserInfo')));

  constructor(
    public router: Router,
    public authenticationService: AuthenticationService
  ) {
    this.userInfo = <IUser>(JSON.parse(localStorage.getItem('UserInfo')));
    if (this.userInfo == null) {
      this.router.navigateByUrl('admin/login');
    }
  }

  ngOnInit() {
    const that = this;
    window.addEventListener('hashchange', function () {
      if (that.userInfo != null) {
        window.location.href = window.location.hash;
      } else {
        if (window.location.hash !== '#/login') {
          window.location.reload();
        }
      }
    });
  }

  logout() {
    this.authenticationService.logout();
  }
}
