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
var forms_1 = require('@angular/forms');
var event_service_1 = require('./shared/event.service');
var CreateSessionComponent = (function () {
    function CreateSessionComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.saveNewSession = new core_1.EventEmitter();
        this.cancelNewSession = new core_1.EventEmitter();
    }
    CreateSessionComponent.prototype.ngOnInit = function () {
        this.name = new forms_1.FormControl('', forms_1.Validators.required);
        this.presenter = new forms_1.FormControl('', forms_1.Validators.required);
        this.duration = new forms_1.FormControl('', forms_1.Validators.required);
        this.level = new forms_1.FormControl('', forms_1.Validators.required);
        this.abstract = new forms_1.FormControl('', forms_1.Validators.required);
        this.sessionForm = new forms_1.FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    };
    CreateSessionComponent.prototype.saveSession = function (sessionFormValue) {
        var session = {
            id: undefined,
            name: sessionFormValue.name,
            presenter: sessionFormValue.presenter,
            duration: sessionFormValue.duration,
            level: sessionFormValue.level,
            abstract: sessionFormValue.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
        console.log(sessionFormValue);
    };
    CreateSessionComponent.prototype.cancel = function () {
        this.cancelNewSession.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CreateSessionComponent.prototype, "saveNewSession", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CreateSessionComponent.prototype, "cancelNewSession", void 0);
    CreateSessionComponent = __decorate([
        core_1.Component({
            selector: 'create-session',
            templateUrl: 'app/event/create-session.component.html',
            styles: ["\n    form { margin-top: 10px; }\n    em {float :right ; color:#E05C65; padding-left:10px;}\n    .form-group { margin-top: 5px; }\n  "]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.Router])
    ], CreateSessionComponent);
    return CreateSessionComponent;
}());
exports.CreateSessionComponent = CreateSessionComponent;
//# sourceMappingURL=create-session.component.js.map