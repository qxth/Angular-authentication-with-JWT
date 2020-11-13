import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import {AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private _auth: AuthService,
    private router: Router
    ) { }
  message: String
  ngOnInit(): void {
    this._auth.token()
  }
  public logout(): void {
    localStorage.removeItem('token')
    this.router.navigate(['/home']);
  }

}
