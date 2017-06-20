"use strict";
var profile_component_1 = require('./profile.component');
var login_component_1 = require('./login.component');
var profile_route_activator_service_1 = require('./profile-route-activator.service');
exports.UserRoutes = [
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [profile_route_activator_service_1.ProfileRouteActivator] },
    { path: 'login', component: login_component_1.LoginComponent }
];
//# sourceMappingURL=user.routes.js.map