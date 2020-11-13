
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {


  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, 
    next: HttpHandler): any {
      const token = localStorage.getItem("token");

      if (token){
        const cloned = req.clone({
         setHeaders: {
           authorization: `Bearer ${ token }`
         }
        });
        return next.handle(cloned);
      }
      else {
        return next.handle(req)// .pipe(tap(()=> {},
      //   (err: any) => {
      //     if (err instanceof HttpErrorResponse){
      //       if (err.status !==401){
      //         return;
      //       }
      //       this.router.navigate(['login']);
      //     }
      //   }))
      }

    
  }

}