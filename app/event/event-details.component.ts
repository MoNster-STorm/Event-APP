import { Component } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute,Params } from '@angular/router'
import { ISession } from './shared/IEvent.model'
@Component({
  selector : 'event-details',
  templateUrl : 'app/event/event-details.component.html',
  styles: [`
    button{
    margin-top: 20px;
    float: right;
    }
    .imageIcon{
        margin : 20px;
        height:200px;
    }
  `]
})

export class EventDetailsComponent{
  event : any
  createSessionMode :boolean
  filterBy : string = "all"
  constructor(private eventService:EventService,private route:ActivatedRoute) {

  }

  ngOnInit(){
    this.route.params.forEach((params:Params) =>
          this.event = this.eventService.getEvent(+params['id']))
    this.createSessionMode = false
  }

  createSession(){
    this.createSessionMode = true
  }

  ShowSession(){
    this.createSessionMode = false
  }

  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null,this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.createSessionMode = false
  }

  cancelNewSession(){
    this.createSessionMode = false
  }
}
