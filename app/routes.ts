import { Routes} from '@angular/router'

import { EventsListComponent } from './event/events-list.component'
import { CreateEventComponent } from './event/create-event.component'
import { CreateSessionComponent } from './event/create-session.component'
import { EventDetailsComponent } from './event/event-details.component';
import { Error404Component } from './error/error.component';
import { EventRouteActivator } from './event/shared/event-route-activator.service';
import { CheckLoginRouteActivator } from './event/shared/check-login-route-activator.service';

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent, canActivate :[CheckLoginRouteActivator]},
  { path: 'events/session/new', component: CreateSessionComponent, canActivate :[CheckLoginRouteActivator]},
  { path: 'events/:id', component: EventDetailsComponent, canActivate :[EventRouteActivator]},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path : 'user', loadChildren:'app/user/user.module#UserModule'}
]
