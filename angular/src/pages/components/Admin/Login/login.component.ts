import { Component, OnInit } from '@angular/core';
import { IAuthentication, IUser } from '../../../../models/models';
import { AuthenticationService, MenuService } from '../../../../services/base.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-admin',
  templateUrl: './login.component.html',
  styles: ['p {color: darkslategray;}'],
  providers: [AuthenticationService],
})
export class LoginComponent {
  loginForm: IAuthentication = <IAuthentication>{};

  errMessage: string;
  isLoading: boolean;

  constructor(
    public authenticationService: AuthenticationService
  ) { }

  submitLoginForm() {
    this.isLoading = true;
    this.authenticationService.login(this.loginForm.UserName, this.loginForm.Password).subscribe((data: IUser) => {
      this.isLoading = false;
      localStorage.setItem('UserInfo', JSON.stringify(data));
      this.errMessage = null;
      window.location.href = '#/admin/blog';
      // window.location.reload();
    }, (err) => {
      this.isLoading = false;
      this.errMessage = 'Login failed';
    });
  }
}
