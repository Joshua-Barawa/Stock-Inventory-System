import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://stock-inv.herokuapp.com/v1/account/';

const registerHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const loginHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login( email:string , password: string):Observable<any>{
    return this.http.post(`${AUTH_API}login/`, {
      username: email,
      password
    }, loginHttpOptions);
  }

  register(username: string,  full_name:string, email: string, business:string,avatar:string, password: string, password2:string): Observable<any> {
    return this.http.post(`${AUTH_API}register/`, {
      username,
      full_name,
      email,
      business,
      avatar,
      password,
      password2,
      
    }, registerHttpOptions);
  }
}