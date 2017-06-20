import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './event-app.component';
import { EventsListComponent } from './event/events-list.component';
import { CreateEventComponent } from './event/create-event.component';
import { CreateSessionComponent } from './event/create-session.component';
import { EventService } from './event/shared/event.service';
import { appRoutes } from './routes'
import { NavComponent } from './nav/nav.component';
import { EventThumbnailComponent } from './event/event-thumbnail.component';
import { EventSessionComponent } from './event/event-session.component';
import { EventDetailsComponent } from './event/event-details.component';
import { Error404Component } from './error/error.component';
import { EventRouteActivator } from './event/shared/event-route-activator.service';
import { AuthService } from './user/authentication.service'
import { ProfileRouteActivator } from './user/profile-route-activator.service';
import { CheckLoginRouteActivator } from './event/shared/check-login-route-activator.service';
import { CollapsibleWell } from './common/collapsible-well.component';
import { JQ_TOKEN } from './common/jQuery.service'
import { TOASTR_TOKEN,Toastr } from './common/toastr.service'
import { ModalTriggerDirective } from './common/modal-trigger.directive'
import { SimpleModalComponent } from './common/simple-modal.component'
import { DurationPipe } from './event/shared/duration.pipe'
import { UpvoteComponent } from './event/upvote.component'
import { VoterService } from './event/voter.service'

declare let jQuery : Object;
declare let toastr : Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    CreateEventComponent,
    NavComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    Error404Component,
    CreateSessionComponent,
    EventSessionComponent,
    CollapsibleWell,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  providers: [
  EventService,
  EventRouteActivator,
  AuthService,
  ProfileRouteActivator,
  CheckLoginRouteActivator,
  {
    provide : JQ_TOKEN,
    useValue : jQuery
  },
  {
    provide : TOASTR_TOKEN,
    useValue : toastr
  },
  VoterService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
