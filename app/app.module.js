"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var event_app_component_1 = require('./event-app.component');
var events_list_component_1 = require('./event/events-list.component');
var create_event_component_1 = require('./event/create-event.component');
var create_session_component_1 = require('./event/create-session.component');
var event_service_1 = require('./event/shared/event.service');
var routes_1 = require('./routes');
var nav_component_1 = require('./nav/nav.component');
var event_thumbnail_component_1 = require('./event/event-thumbnail.component');
var event_session_component_1 = require('./event/event-session.component');
var event_details_component_1 = require('./event/event-details.component');
var error_component_1 = require('./error/error.component');
var event_route_activator_service_1 = require('./event/shared/event-route-activator.service');
var authentication_service_1 = require('./user/authentication.service');
var profile_route_activator_service_1 = require('./user/profile-route-activator.service');
var check_login_route_activator_service_1 = require('./event/shared/check-login-route-activator.service');
var collapsible_well_component_1 = require('./common/collapsible-well.component');
var jQuery_service_1 = require('./common/jQuery.service');
var toastr_service_1 = require('./common/toastr.service');
var modal_trigger_directive_1 = require('./common/modal-trigger.directive');
var simple_modal_component_1 = require('./common/simple-modal.component');
var duration_pipe_1 = require('./event/shared/duration.pipe');
var upvote_component_1 = require('./event/upvote.component');
var voter_service_1 = require('./event/voter.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            declarations: [
                event_app_component_1.AppComponent,
                events_list_component_1.EventsListComponent,
                create_event_component_1.CreateEventComponent,
                nav_component_1.NavComponent,
                event_thumbnail_component_1.EventThumbnailComponent,
                event_details_component_1.EventDetailsComponent,
                error_component_1.Error404Component,
                create_session_component_1.CreateSessionComponent,
                event_session_component_1.EventSessionComponent,
                collapsible_well_component_1.CollapsibleWell,
                duration_pipe_1.DurationPipe,
                simple_modal_component_1.SimpleModalComponent,
                modal_trigger_directive_1.ModalTriggerDirective,
                upvote_component_1.UpvoteComponent
            ],
            providers: [
                event_service_1.EventService,
                event_route_activator_service_1.EventRouteActivator,
                authentication_service_1.AuthService,
                profile_route_activator_service_1.ProfileRouteActivator,
                check_login_route_activator_service_1.CheckLoginRouteActivator,
                {
                    provide: jQuery_service_1.JQ_TOKEN,
                    useValue: jQuery
                },
                {
                    provide: toastr_service_1.TOASTR_TOKEN,
                    useValue: toastr
                },
                voter_service_1.VoterService
            ],
            bootstrap: [event_app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map