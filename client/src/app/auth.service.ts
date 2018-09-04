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
  private loginAuthUri = 'http://localhost:3000/api/Users/login';

  constructor(private http: HttpClient) { }
  /* check for username or pwd is okey */
  checkLogin(username, password) {
    return this.http.post(this.loginAuthUri, {'email': username, 'password': password}).subscribe(
      data => {
          console.log(data, ' response from backend');
          alert('login success, access token =' + data.id);
          sessionStorage.setItem('usertoken',data.id);
      },
      error => {
        alert('Login fail: ' + error.error.error.message);
      },
    );
  }

}
