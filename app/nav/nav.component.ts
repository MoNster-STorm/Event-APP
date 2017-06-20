import { Component } from '@angular/core';
import { AuthService } from '../user/authentication.service'
import { EventService } from '../event/shared/event.service'
import { ISession } from '../event/shared/IEvent.model'
@Component({
  selector: 'nav',
  templateUrl: 'app/nav/nav.component.html',
  styles: [`
    .nav{
      font-size :15px;
    }
    #searchForm { margin-right: 100px; }
    @media (max-width :1200px) {#searchForm{display:none}}
  `]
})
export class NavComponent {
  sessionTerm : string
  matchedSessions : ISession[]
  constructor(private authService:AuthService,private eventService:EventService){
  }

  searchSession(sessionTerm?:string){
    if(sessionTerm == "" || sessionTerm == undefined){
      console.log(sessionTerm);
      this.matchedSessions = []
    }
    else{
    this.eventService.searchSession(sessionTerm).subscribe(sessions => {
      this.matchedSessions = sessions
      console.log(this.matchedSessions)
      });
    }

  }
}
