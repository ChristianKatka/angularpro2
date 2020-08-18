import { Component, OnInit } from '@angular/core';
import { User } from '../models/auth-form.interface';

@Component({
    selector: 'auth-form-controller',
    templateUrl: './auth-form.controller.html',
    styleUrls: ['./auth-form.controller.scss']
})

export class AuthFormController implements OnInit {
    constructor() { }

    ngOnInit() { }

    rememberMe: boolean = false;

    rememberUser(remember: boolean) {
      this.rememberMe = remember;
    }
  
    createUser(user: User) {
      console.log('Create account', user);
    }
  
    loginUser(user: User) {
      console.log('Login', user);
      console.log('remember me: ', this.rememberMe);
    }


}