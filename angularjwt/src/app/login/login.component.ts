import { Component, OnInit } from '@angular/core';

import {AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
 
  constructor(
    private _auth: AuthService

    ) {}
  
  
  
  ngOnInit(): void {
  
  }
 
  signUp(user) {
    this._auth.signUp(user);
  }

  


}
