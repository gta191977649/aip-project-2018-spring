import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* URL for login  auth server*/
  private loginAuthUri = '/path/to/auth?';

  constructor(private http: HttpClient) { }
  /* check for username or pwd is okey */
  checkLogin(username, password) {
    return this.http.post(this.loginAuthUri, {
      username,
      password
    }).subscribe(data => {
      console.log(data, ' response from backend');
    });
  }
}
