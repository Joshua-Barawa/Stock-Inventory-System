import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import { TokenStorageService } from '../token-storage.service';
import {  Injector } from '@angular/core';
import { catchError, Observable, throwError, BehaviorSubject, switchMap, filter, take } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private inject: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let authServic=this.inject.get(TokenStorageService)
    let authToken = request.clone({
      setHeaders:{
        Authorization: "Token "+authServic.getToken()
      }});
    console.log(authToken)
    console.log(authServic)
    return next.handle(authToken).pipe(
      catchError((err:HttpErrorResponse)=>{
        if (err.status === 401){
          alert("error is 401")
        }
        if(err.status ===404){
          alert("error is 404")
        }
        return throwError(()=>new Error ('ERROR ERR'));
      })
    );
  }
}
