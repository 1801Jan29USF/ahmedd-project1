import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Ticket } from '../../beans/ticket';
import { ReimbursementService } from '../../services/reimbursement.service';

@Component({
  selector: 'app-manager-view-ticket',
  templateUrl: './manager-view-ticket.component.html',
  styleUrls: ['./manager-view-ticket.component.css']
})
export class ManagerViewTicketComponent implements OnInit {





  mangerViewAll: Array<Ticket> = [];

  constructor(private client: HttpClient, private remService: ReimbursementService) { }

  ngOnInit() {

    this.mangerViewAll = this.remService.mangerGetAll();

  }

}
