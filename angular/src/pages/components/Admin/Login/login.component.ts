import { Component, OnInit } from '@angular/core';
import { IAuthentication, IUser } from '../../../../models/models';
import { AuthenticationService, MenuService } from '../../../../services/base.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'app-admin',
    templateUrl: './login.component.html',
    providers: [AuthenticationService],
})
export class LoginComponent {
  loginForm: IAuthentication = <IAuthentication>{};

  errMessage: string;

  constructor(
    public authenticationService: AuthenticationService
  ) {}

  submitLoginForm() {
    this.authenticationService.login(this.loginForm.UserName, this.loginForm.Password).subscribe((data: IUser) => {
      localStorage.setItem('UserInfo', JSON.stringify(data));
    }, (err) => {
      this.errMessage = 'Login failed';
    });
  }
}
