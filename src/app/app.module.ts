import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth/auth.service';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    // RouterModule.forChild([
    //     { path: 'login', component: LoginComponent }
    //   ]),
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
