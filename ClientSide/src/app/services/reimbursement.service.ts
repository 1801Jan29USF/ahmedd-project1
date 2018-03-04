import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../beans/ticket';

@Injectable()
export class ReimbursementService {

  reimbursments: Array<Ticket> = [];

  constructor(private client: HttpClient) { }

  getPastTickets(): any {
    this.client.get('view-past-tickets', { withCredentials: true })
      .subscribe(
        (succ: Array<Ticket>) => {
          return this.reimbursments = succ;

        },
        err => {
          alert('failed to retrieve Employee past tikcets');
        }

      );
  }

  mangerGetAll(): any {
    this.client.get('manager-view-ticket', { withCredentials: true })
      .subscribe(
        (succ: Array<Ticket>) => {
          return this.reimbursments = succ;

        },
        err => {
          alert('failed to retrieve Employee past tikcets');
        }

      );
  }

  getPending(): any {
    this.client.get('pending', { withCredentials: true })
      .subscribe(
        (succ: Array<Ticket>) => {
          this.reimbursments = succ;

          return this.reimbursments;
        },
        err => {
          alert('failed to retrieve pending tickets');
        }

      );
  }


  getAccepted(): any {
    this.client.get('accepted', { withCredentials: true })
      .subscribe(
        (succ: Array<Ticket>) => {
          this.reimbursments = succ;

          return this.reimbursments;
        },
        err => {
          alert('failed to retrieve accepted tikcets');
        }

      );
  }

  getDenied(): any {
    this.client.get('denied', { withCredentials: true })
      .subscribe(
        (succ: Array<Ticket>) => {
          this.reimbursments = succ;

          return this.reimbursments;
        },
        err => {
          alert('failed to retrieve denied tikcets');
        }

      );
  }


}
