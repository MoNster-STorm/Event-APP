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
var authentication_service_1 = require('../user/authentication.service');
var voter_service_1 = require('./voter.service');
var EventSessionComponent = (function () {
    function EventSessionComponent(authService, voterService) {
        this.authService = authService;
        this.voterService = voterService;
        this.visibleSessions = [];
    }
    EventSessionComponent.prototype.ngOnChanges = function () {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    };
    EventSessionComponent.prototype.userHasVoted = function (session) {
        return this.voterService.userHasVoted(this.authService.currentUser.firstName, session);
    };
    EventSessionComponent.prototype.toggleVote = function (session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVote(this.authService.currentUser.firstName, session);
        }
        else {
            this.voterService.addVote(this.authService.currentUser.firstName, session);
        }
    };
    EventSessionComponent.prototype.filterSessions = function (filterBy) {
        if (filterBy === "all") {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(function (session) {
                return session.level.toLocaleLowerCase() === filterBy;
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], EventSessionComponent.prototype, "sessions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EventSessionComponent.prototype, "filterBy", void 0);
    EventSessionComponent = __decorate([
        core_1.Component({
            selector: 'session-list',
            templateUrl: 'app/event/event-session.component.html',
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthService, voter_service_1.VoterService])
    ], EventSessionComponent);
    return EventSessionComponent;
}());
exports.EventSessionComponent = EventSessionComponent;
//# sourceMappingURL=event-session.component.js.map