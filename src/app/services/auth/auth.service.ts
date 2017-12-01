import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';

@Injectable()
export class AuthService {
  user: any

  constructor( private http: Http,
               private _route: ActivatedRoute,
               private _router: Router,
               private _flashMessagesService: FlashMessagesService )
             { }

  getUserToken() {
    return this.user.token
  }

  signIn(email: string, password: string) {
    // Create the credentials object.
    let credentials = {
      'credentials': {
        'email': email,
        'password': password
      }
    }

    // Make the post request. environment.apiOrigin contains the local server address http://localhost:4741
    this.http.post(environment.apiOrigin + '/sign-in', credentials)
      .subscribe(
        // Save the response to user
        response => {
        this.user = JSON.parse(response['_body']).user;
        this._router.navigate(["/trips"]);
        this._flashMessagesService.show('Welcome to Roadtrip ' + this.user.email);
      },
        err => { this._flashMessagesService.show(
          'Sorry unable to log you in. Do you need to setup an account?.' + err) }
      )
  }

  signUp(email: string, password: string, password_confirmation: string) {
    // Create the credentials object.
    const credentials = {
      'credentials': {
        'email': email,
        'password': password,
        'password_confirmation': password_confirmation
      }
    }

    // Make the post request. environment.apiOrigin contains the local server address http://localhost:4741
    this.http.post(environment.apiOrigin + '/sign-up', credentials)
      .subscribe(
        response => {
          // Send the existing credentials back to the server to log in the new user
          this.signIn(credentials.credentials.email, credentials.credentials.password)
        },
        err => { this._flashMessagesService.show(
          'Sorry unable to setup your account. Did you include your email and password.' + err) }
      )
  }

  signOut() {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}

    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.getUserToken()}
    // Make the delete request to URL, and add the token from Config.
    this.http.delete(environment.apiOrigin + '/sign-out/' + this.user.id, config)
      .subscribe(
        // Remove the logged in user.
        data => { this.user = null;
        this._flashMessagesService.show( 'You are logged out.');
        this._router.navigate(["/signin"]);
       },
        err => { this._flashMessagesService.show(
          'Sorry there was a problem logging you out. ' + err) }
      )
  }

  changePassword(oldPassword: string, newPassword: string) {
    // Create the passwords data object to send.
    let passwords = {
      'passwords': {
        'old': oldPassword,
        'new': newPassword
      }
    }

    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}

    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.getUserToken()}

    // Make the patch request to URL, add the password data and token from Config.
    this.http.patch(environment.apiOrigin + '/change-password/' + this.user.id, passwords, config)
      .subscribe(
        data => { this._flashMessagesService.show('Hey ' + this.user.email + ' you succesfully changed your password!') },
        err => { this._flashMessagesService.show('Sorry ' + this.user.email + ' unable to change you password.') }
      )
  }
}
