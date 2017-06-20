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
var event_service_1 = require('./shared/event.service');
var router_1 = require('@angular/router');
var EventDetailsComponent = (function () {
    function EventDetailsComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
        this.filterBy = "all";
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            return _this.event = _this.eventService.getEvent(+params['id']);
        });
        this.createSessionMode = false;
    };
    EventDetailsComponent.prototype.createSession = function () {
        this.createSessionMode = true;
    };
    EventDetailsComponent.prototype.ShowSession = function () {
        this.createSessionMode = false;
    };
    EventDetailsComponent.prototype.saveNewSession = function (session) {
        var nextId = Math.max.apply(null, this.event.sessions.map(function (s) { return s.id; }));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.createSessionMode = false;
    };
    EventDetailsComponent.prototype.cancelNewSession = function () {
        this.createSessionMode = false;
    };
    EventDetailsComponent = __decorate([
        core_1.Component({
            selector: 'event-details',
            templateUrl: 'app/event/event-details.component.html',
            styles: ["\n    button{\n    margin-top: 20px;\n    float: right;\n    }\n    .imageIcon{\n        margin : 20px;\n        height:200px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.ActivatedRoute])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map