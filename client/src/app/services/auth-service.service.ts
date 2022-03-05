import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private _registerUrl = "http://localhost:5500/api/register";
  private _loginUrl = "http://localhost:5500/api/login";

  constructor(private http: HttpClient) { }

  registerUser(user:any) {
    return this.http.post<any>(this._registerUrl, user)
  }

}
