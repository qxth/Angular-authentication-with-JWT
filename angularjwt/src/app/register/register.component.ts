import { Component, OnInit } from '@angular/core';
import {AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
 
  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  signIn(user) {
    this._auth.signIn(user);
  }

}
