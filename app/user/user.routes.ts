import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'
import { Routes,CanActivate } from '@angular/router'
import { ProfileRouteActivator } from './profile-route-activator.service';

export const UserRoutes:Routes = [
  { path: 'profile', component: ProfileComponent ,canActivate :[ProfileRouteActivator]},
  { path: 'login', component: LoginComponent }

]
