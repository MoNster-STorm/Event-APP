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
var AuthService = (function () {
    function AuthService(route) {
        this.route = route;
    }
    AuthService.prototype.authenticateUser = function (firstName) {
        this.currentUser = {
            id: 1,
            firstName: firstName,
            lastName: "Gupta"
        };
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.deAuthenticate = function () {
        this.currentUser = null;
        this.route.navigate(['user/login']);
    };
    AuthService.prototype.updateprofile = function (profileForm) {
        this.currentUser.firstName = profileForm.firstName;
        this.currentUser.lastName = profileForm.lastName;
        console.log(this.currentUser.id);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=authentication.service.js.map