import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {error} from 'util';
import {isDefined} from '@angular/compiler/src/util';
import {Router} from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) { }
  /* check for username or pwd is okey */

  OnLoginSeccuess(res) {
    if (isDefined(res)) {
      console.log(res, ' response from backend');
      alert('login success, access token =' + res.id);
      localStorage.setItem('token', res.id);
      //redirect user
      this.router.navigate(['/dashboard']);
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

  login(username, password) {
    return this.http.post(this.loginAuthUri, {'email': username, 'password': password}).subscribe(
      (res: Response) => this.OnLoginSeccuess(res),
      (res: Response) => this.OnLoginFail(res),
    );
  }
  logout() {
    localStorage.clear();
    alert('you logged out');
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
