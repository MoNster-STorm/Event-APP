"use strict";
var events_list_component_1 = require('./event/events-list.component');
var create_event_component_1 = require('./event/create-event.component');
var create_session_component_1 = require('./event/create-session.component');
var event_details_component_1 = require('./event/event-details.component');
var error_component_1 = require('./error/error.component');
var event_route_activator_service_1 = require('./event/shared/event-route-activator.service');
var check_login_route_activator_service_1 = require('./event/shared/check-login-route-activator.service');
exports.appRoutes = [
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/new', component: create_event_component_1.CreateEventComponent, canActivate: [check_login_route_activator_service_1.CheckLoginRouteActivator] },
    { path: 'events/session/new', component: create_session_component_1.CreateSessionComponent, canActivate: [check_login_route_activator_service_1.CheckLoginRouteActivator] },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent, canActivate: [event_route_activator_service_1.EventRouteActivator] },
    { path: '404', component: error_component_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
//# sourceMappingURL=routes.js.map