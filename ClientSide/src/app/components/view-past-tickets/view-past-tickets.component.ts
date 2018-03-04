import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Ticket } from '../../beans/ticket';
import { ReimbursementService } from '../../services/reimbursement.service';

@Component({
  selector: 'app-view-past-tickets',
  templateUrl: './view-past-tickets.component.html',
  styleUrls: ['./view-past-tickets.component.css']
})




export class ViewPastTicketsComponent implements OnInit {


  viewPastTicket: Array<Ticket> = [];


  constructor(private client: HttpClient, private remService: ReimbursementService) { }

  ngOnInit() {

    this.viewPastTicket = this.remService.getPastTickets();


  }


}
