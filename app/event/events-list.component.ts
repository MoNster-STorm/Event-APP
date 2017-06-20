import { Component,OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import {IEvent} from './shared/IEvent.model'

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming ng Events </h1>
    <hr>
      <div class = "row">
        <div *ngFor = "let event of events" class = "col-md-5">
          <event-thumbnail [event] = "event"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
  styles: [`
    th, td { font-size: 16px; padding:5px 10px;}
  `]
})
export class EventsListComponent implements OnInit {
  events:IEvent[]
  constructor(private eventService:EventService) {

  }
  ngOnInit() {
    this.events = this.eventService.getEvents();
    
  }


}
