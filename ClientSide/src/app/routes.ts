import { Routes } from '@angular/router';



import { LoginComponent } from './components/login/login.component';

import { LoggedInGuard } from './guards/logged-in.guard';
import { ReimbursmentComponent } from './components/reimbursment/reimbursment.component';
import { UpdateTicketsComponent } from './components/update-tickets/update-tickets.component';
import { ViewPastTicketsComponent } from './components/view-past-tickets/view-past-tickets.component';
import { ManagerViewTicketComponent } from './components/manager-view-ticket/manager-view-ticket.component';
import { ManagerFilterTicketsComponent } from './components/manager-filter-tickets/manager-filter-tickets.component';
import { PendingComponent } from './components/pending/pending.component';
import { AcceptedComponent } from './components/accepted/accepted.component';
import { DeniedComponent } from './components/denied/denied.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'reimburesment',
    component: ReimbursmentComponent
  },
  {
    path: 'update-tickets',
    component: UpdateTicketsComponent
  },
  {
    path: 'view-past-tickets',
    component: ViewPastTicketsComponent
  },
  {
    path: 'manager-view-ticket',
    component: ManagerViewTicketComponent,
  },

  {
    path: 'pending',
    component: PendingComponent
  },
  {
    path: 'accepted',
    component: AcceptedComponent,
  },
  {
    path: 'denied',
    component: DeniedComponent,
  },

  {
    path: 'manager-filter-tickets',
    component: ManagerFilterTicketsComponent
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
