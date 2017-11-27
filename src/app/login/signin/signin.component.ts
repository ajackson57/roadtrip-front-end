import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  // User object. Used to fix template binding
  user = <any>{};

  constructor(public auth: AuthService) {
    console.log('Sign-In Component Contructed');
  }

  ngOnInit() {
  }

  signIn() {
    this.auth.signIn(this.user.email, this.user.password)
  }

}
