import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

/* Components imports */
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DonnorsComponent } from './components/donnors/donnors.component';
import { ReceiversListComponent } from './components/receivers-list/receivers-list.component';
import { CriticalConditionListComponent } from './components/critical-condition-list/critical-condition-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

/* Services Imports */
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DonnorsComponent,
    ReceiversListComponent,
    CriticalConditionListComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BootstrapModalModule.forRoot({container:document.body}),
    AppRoutingModule
  ],
  entryComponents: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    ValidateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
