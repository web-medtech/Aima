import { Component, OnInit } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  showRegister() {
    let disposable = this.dialogService.addDialog(RegisterComponent, {
      title: 'Créer un compte', 
      message: ''
    }, { backdropColor: 'rgba(0, 0, 0, 0.67)' }).subscribe((isConfirmed) => {
      //We get dialog result
      if(isConfirmed) {
        // isConfirmed
      } else {
        // canceled
      }
    });
  }

  showLogin() {
    let disposable = this.dialogService.addDialog(LoginComponent, {
      title: 'Se connecter',
      message: ''
    }, { backdropColor: 'rgba(0, 0, 0, 0.67)' }).subscribe((isConfirmed) => {
      //We get dialog result
      if(isConfirmed) {
        // isConfirmed
      } else {
        // canceled
      }
    });
  }

}
