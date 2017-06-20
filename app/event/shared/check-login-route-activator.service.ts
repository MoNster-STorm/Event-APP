import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot,Router, CanActivate  } from '@angular/router'
import { AuthService } from '../../user/authentication.service'

@Injectable()
export class CheckLoginRouteActivator implements CanActivate{

  constructor(private authService:AuthService,private router:Router){

  }

  canActivate(route:ActivatedRouteSnapshot){
    if(!this.authService.isAuthenticated())
      this.router.navigate(['user/login'])
    return true

  }
}
