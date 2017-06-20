import { Component , Input, OnChanges} from '@angular/core'
import { ISession } from './shared/IEvent.model'
import { AuthService } from '../user/authentication.service'
import { VoterService } from './voter.service'

@Component({
  selector: 'session-list',
  templateUrl: 'app/event/event-session.component.html',

})
export class EventSessionComponent implements OnChanges {
  @Input() sessions:ISession[]
  @Input() filterBy:String
  visibleSessions :ISession[] = []

  constructor (private authService:AuthService,private voterService:VoterService){

  }
  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy)
    }
  }

  userHasVoted(session:ISession){
    return this.voterService.userHasVoted(this.authService.currentUser.firstName,session)
  }

  toggleVote(session:ISession){
    if(this.userHasVoted(session)){
      this.voterService.deleteVote(this.authService.currentUser.firstName,session)
    }
    else{
      this.voterService.addVote(this.authService.currentUser.firstName,session)
    }
  }

  filterSessions(filterBy){
    if(filterBy === "all"){
      this.visibleSessions = this.sessions.slice(0)
    }
    else{
      this.visibleSessions = this.sessions.filter(session =>{
         return session.level.toLocaleLowerCase() === filterBy})
    }
  }
}
