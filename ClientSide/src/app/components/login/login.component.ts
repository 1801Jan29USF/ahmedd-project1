import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential = {
    username: '',
    password: ''
  };

  managerstatus;
  constructor(private router: Router, private client: HttpClient, private cookie: CookieService) { }

  ngOnInit() {
  }

  login() {
    this.client.post(`${environment.context}login`, this.credential,
      { withCredentials: true })
      .subscribe(
        (succ: any) => {
          alert(`${succ.username} you have logged in`);
          this.cookie.putObject('user', succ);
          this.managerstatus = this.cookie.getObject('user');

          console.log(this.managerstatus);
          if (this.managerstatus.roleId === 1) {

            this.router.navigateByUrl('manager-view-ticket');
          }
          if (this.managerstatus.roleId === 2) {
            this.router.navigateByUrl('view-past-tickets');
          }

        },
        (err) => {
          alert('failed to log in');
        }
      );
  }

}
