import { Component, Input , Output, EventEmitter } from '@angular/core'
import { AuthService } from '../user/authentication.service'
import { ISession } from './shared/IEvent.model'

@Component({
  selector : 'upvote',
  styleUrls :['app/event/upvote.component.css'],
  template : `
    <div class = "votingWidgetContainer pointable" (click) = "onClick()">
      <div class = "well votingWidget">
        <div class = "votingButton">
          <i class ="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class = "badge badge-inverse votingCount">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `
})

export class UpvoteComponent {
  @Input() set voted(val){
    this.iconColor = val ? 'red':'white';
  }
  @Input() count:number
  @Output() vote =  new EventEmitter()
  iconColor:string


  constructor(private authService:AuthService){

  }


  onClick(){
    this.vote.emit({})
  }


}
