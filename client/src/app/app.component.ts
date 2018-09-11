import { Component,OnInit } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn();
  }
}
