import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../beans/ticket';
import { HttpClient } from '@angular/common/http';
import { ReimbursementService } from '../../services/reimbursement.service';

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.css']
})
export class AcceptedComponent implements OnInit {

  Accpeted: Array<Ticket> = [];

  constructor(private client: HttpClient, private remService: ReimbursementService) { }

  ngOnInit() {

    this.Accpeted = this.remService.getPending();

  }

}
