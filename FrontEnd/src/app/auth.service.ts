import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _regiterUrl = "https://localhost:5001/api/account/register";
  private _loginUrl = "https://localhost:5001/api/account/login";
  constructor(private http: HttpClient) { }

  registerUser( user ){
    return this.http.post(this._regiterUrl, user);
  }

  loginUser( user ){
    return this.http.post<any>(this._loginUrl, user);
  }
}
