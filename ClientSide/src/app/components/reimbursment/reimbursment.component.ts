import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Ticket } from '../../beans/ticket';

@Component({
  selector: 'app-reimbursment',
  templateUrl: './reimbursment.component.html',
  styleUrls: ['./reimbursment.component.css']
})
export class ReimbursmentComponent implements OnInit {



  newTicket = {

    typeId: 0,
    amount: '',
    description: '',

  };




  constructor(private router: Router, private client: HttpClient, private cookie: CookieService) { }

  ngOnInit() {

  }

  submitTicket() {

    {
      console.log(this.newTicket);
      this.client.post(`${environment.context}reimburesment`, this.newTicket,
        { withCredentials: true })
        .subscribe(
          (succ: any) => {

            this.router.navigate(['view-past-tickets']);
          },
          error => {
            alert('Ticket failed to submit');

          }
        );
    }
  }

}
