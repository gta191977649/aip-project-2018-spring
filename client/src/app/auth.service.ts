import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {error} from 'util';
import {isDefined} from '@angular/compiler/src/util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private islogin = JSON.parse(localStorage.getItem('islogin') || 'false');
  /* URL for login  auth server*/
  private loginAuthUri = 'http://localhost:3000/api/Users/login';
  private infoUri = 'http://localhost:3000/api/Users';

  constructor(private http: HttpClient) { }
  /* check for username or pwd is okey */

  OnLoginSeccuess(res) {
    if (isDefined(res)) {
      console.log(res, ' response from backend');
      alert('login success, access token =' + res.id);
      this.setLoggedIn(true);
      localStorage.setItem('token', res.id);
    } else {
      alert('undefine error');
    }
  }

  OnLoginFail(res) {
    if(isDefined(res)) {
      alert('Login fail: ' + res.error.error.message);
    } else {
      alert('Network error');
    }
  }

  checkLogin(username, password) {
    return this.http.post(this.loginAuthUri, {'email': username, 'password': password}).subscribe(
      (res: Response) => this.OnLoginSeccuess(res),
      (res: Response) => this.OnLoginFail(res),
    );
  }
  /*
  checkLogin(username, password) {
    return this.http.post(this.loginAuthUri, {'email': username, 'password': password}).subscribe(
      data  => {
        if (isDefined(data)) {
          console.log(data, ' response from backend');
          alert('login success, access token =' + data.id);
          this.setLoggedIn(true);
          localStorage.setItem('token', data.id);
        } else {
          alert('undefine error');
        }
      },
      res => {
        if(isDefined(res)) {
          alert('Login fail: ' + res.error.error.message);
        } else {
          alert('Network error');
        }
      },
    );
  }
  */
  get isLogin() {
    return JSON.parse(localStorage.getItem('islogin') || this.islogin.toString());
  }
  get getAccessToken(): String {
    const token = localStorage.getItem('token');
    if(this.islogin && isDefined(token)) {
      return token;
    }
    return null;
  }
  get username() {
    return this.http.get(this.infoUri + '?access_token=' + this.getAccessToken + '&filter=');
  }
  setLoggedIn(value: boolean) {
    this.islogin = value;
    localStorage.setItem('islogin', 'true');
  }
}
