import { Injectable } from '@angular/core'
import { Router, CanActivate  } from '@angular/router'
import { AuthService } from './authentication.service'

@Injectable()
export class ProfileRouteActivator implements CanActivate{

  constructor(private authService:AuthService,private router:Router){

  }

  canActivate(){
    if(!this.authService.isAuthenticated())
      this.router.navigate(['user/login'])
    return true
  }
}
