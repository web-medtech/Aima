import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

export interface LoginModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends DialogComponent<LoginModel, boolean> implements LoginModel  {
  title: string;
  message: string;

  // User login form properties
  email: String;
  password: String;

  constructor(
    dialogService: DialogService,
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) {
    super(dialogService);
  }

  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }

  onLoginSubmit() {
    const user = {
      email: this.email,
      password: this.password
    }

    // Validate email.
    if (!this.validateService.validateEmail(user.email)) {
      console.log('Please use a valid email.');
      return false;
    }

    // Authenticate User
    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user)
        console.log('You are now logged in.');
        this.router.navigate(['/profile']);
        this.confirm();
      } else {
        console.log(data.msg);
      }
    })
    this.confirm();
  }
}
