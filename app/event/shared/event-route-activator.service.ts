import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot,Router, CanActivate  } from '@angular/router'
import { EventService } from './event.service'

@Injectable()
export class EventRouteActivator implements CanActivate{

  constructor(private eventService:EventService,private router:Router){

  }

  canActivate(route:ActivatedRouteSnapshot){
    const validEvent = !!this.eventService.getEvent(+route.params['id'])
    console.log(validEvent)

    if(!validEvent)
      this.router.navigate(['/404'])
    return validEvent
  }
}
