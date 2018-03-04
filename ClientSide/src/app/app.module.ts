import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { appRoutes } from './routes';
import { LoginComponent } from './components/login/login.component';

import { LoggedInGuard } from './guards/logged-in.guard';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ReimbursmentComponent } from './components/reimbursment/reimbursment.component';
import { ViewPastTicketsComponent } from './components/view-past-tickets/view-past-tickets.component';
import { UpdateTicketsComponent } from './components/update-tickets/update-tickets.component';
import { ManagerViewTicketComponent } from './components/manager-view-ticket/manager-view-ticket.component';
import { ManagerFilterTicketsComponent } from './components/manager-filter-tickets/manager-filter-tickets.component';
import { PendingComponent } from './components/pending/pending.component';
import { AcceptedComponent } from './components/accepted/accepted.component';
import { DeniedComponent } from './components/denied/denied.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true }),
    FormsModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    ReimbursmentComponent,
    ViewPastTicketsComponent,
    UpdateTicketsComponent,
    ManagerViewTicketComponent,
    ManagerFilterTicketsComponent,
    PendingComponent,
    AcceptedComponent,
    DeniedComponent
  ],
  providers: [

    LoggedInGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
