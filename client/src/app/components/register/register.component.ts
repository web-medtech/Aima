import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

export interface RegisterModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends DialogComponent<RegisterModel, boolean> implements RegisterModel  {
  title: string;
  message: string;

  // User registration form properties
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
  password: String;

  constructor(
    dialogService: DialogService,
    private validateService: ValidateService,
    private authService: AuthService
  ) {
    super(dialogService);
  }

  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }

  onRegisterSubmit() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      password: this.password
    }

    // Required fields.
    if (!this.validateService.validateRegister(user)) {
      console.log('Please fill all required fields.');
      return false;
    }

    // Validate email.
    if (!this.validateService.validateEmail(user.email)) {
      console.log('Please use a valid email.');
      return false;
    }

    // Validate phone number.
    if (user.phoneNumber != undefined) {
      if (!this.validateService.validatePhoneNumber(user.phoneNumber)) {
        console.log('Please use a valid phone number.');
        return false;
      }
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        console.log('Registered and can log in.');
        this.confirm();
      } else {
        console.log('Something went wrong.');
      }
    })
  }
}
