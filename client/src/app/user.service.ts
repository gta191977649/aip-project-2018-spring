import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerAuthUri = 'http://localhost:3000/api/Users';

  constructor(private http: HttpClient) { }
  registerUser(username, password) {
    return this.http.post(this.registerAuthUri, {'email': username, 'password': password}).subscribe(
      data => {
        console.log(data, ' response from backend');
        alert('register success!');
      },
      error => {
        alert('register fail: ' + error.error.error.message);

      },
    );
  }
}
