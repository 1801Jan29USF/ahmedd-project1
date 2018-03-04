import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../beans/ticket';
import { HttpClient } from '@angular/common/http';
import { ReimbursementService } from '../../services/reimbursement.service';

@Component({
  selector: 'app-denied',
  templateUrl: './denied.component.html',
  styleUrls: ['./denied.component.css']
})
export class DeniedComponent implements OnInit {

  denied: Array<Ticket> = [];

  constructor(private client: HttpClient, private remService: ReimbursementService) { }

  ngOnInit() {

    this.denied = this.remService.getPending();

  }

}
