import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  // Not bound to multiple inputs, no object needed
  oldPassword: string
  newPassword: string

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  changePassword() {
    this.auth.changePassword(this.oldPassword, this.newPassword)
  }

}
