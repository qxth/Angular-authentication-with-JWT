import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient,
    private router: Router
    ){}
    signIn(user):void {
     this.http.post('http://localhost:3000/api/'+'register', user).subscribe((resp: any)=> {
      this.router.navigate(['/login']);

    });
      
    }
  
  signUp(user): void {
    this.http.post(this.url + 'login', user).subscribe((resp: any)=> {
      localStorage.setItem('token',resp.token)
      this.router.navigate(['/home']);

    })
  }
   message: String
  public token(): void{
   
    this.http.get<any>('http://localhost:3000/profile').subscribe(
      (response) => {
        if (response) {
          this.message = response.msg;
        }
      },
      (error) => {
        if(error.status === 401){
          localStorage.removeItem('token')
          this.router.navigate(['/home']);
          this.message = 'You are not authorized to visit this route';
        }
      }
    )
  }

  








}
