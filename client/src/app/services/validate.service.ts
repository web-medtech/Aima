import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (
      user.firstName == undefined || user.lastName == undefined ||
      user.email == undefined || user.password == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  }

  validatePhoneNumber(phoneNumber) {
    const re = /\d{8}/;
    // Remove phone number white spaces before testing.
    return re.test(phoneNumber.split(' ').join(''));
  }
}
