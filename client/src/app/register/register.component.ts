import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private UsrServices: UserService, private auth: AuthService, private router: Router) { }
  register(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.UsrServices.registerUser(username, password);

  }
  ngOnInit() {
    if (this.auth.loggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

}
