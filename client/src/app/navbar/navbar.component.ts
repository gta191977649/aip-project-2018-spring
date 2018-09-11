import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  constructor(private auth: AuthService, private router: Router,private location:Location) { }
  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn();
  }

  navLogout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
