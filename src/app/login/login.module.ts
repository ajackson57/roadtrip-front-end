import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TripsModule } from '../trips/trips.module'
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component'
import { LogoutComponent } from './logout/logout.component'


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ChangepasswordComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    TripsModule,
    RouterModule.forRoot([
        { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'changepassword', component: ChangepasswordComponent },
        { path: 'logout', component: LogoutComponent }
      ]),
    CommonModule,
    FormsModule
  ],
  exports: [
    SigninComponent,
    SignupComponent,
    ChangepasswordComponent,
    NavbarComponent
  ]
})
export class LoginModule { }
