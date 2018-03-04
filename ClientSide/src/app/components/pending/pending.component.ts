import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from '../../services/reimbursement.service';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../../beans/ticket';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  pending: Array<Ticket> = [];

  constructor(private client: HttpClient, private remService: ReimbursementService) { }

  ngOnInit() {

    this.pending = this.remService.getPending();

  }

}
