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
var router_1 = require('@angular/router');
var event_service_1 = require('./shared/event.service');
var CreateEventComponent = (function () {
    function CreateEventComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    CreateEventComponent.prototype.saveEvent = function (event) {
        this.eventService.saveEvent(event);
        this.router.navigate(['/events']);
    };
    CreateEventComponent.prototype.cancel = function () {
        this.router.navigate(['/events']);
    };
    CreateEventComponent = __decorate([
        core_1.Component({
            selector: 'create-event',
            templateUrl: 'app/event/create-event.component.html',
            styles: ["\n    form { margin-top: 10px; }\n    label { display: block; }\n    .form-group { margin-top: 5px; }\n    em {float :right ; color:#E05C65; padding-left:10px;}\n  "]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.Router])
    ], CreateEventComponent);
    return CreateEventComponent;
}());
exports.CreateEventComponent = CreateEventComponent;
//# sourceMappingURL=create-event.component.js.map