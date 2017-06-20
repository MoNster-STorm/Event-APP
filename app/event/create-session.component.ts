import { Component,OnInit,Output,EventEmitter} from '@angular/core'
import { Router } from '@angular/router'
import { FormControl,FormGroup,Validators } from '@angular/forms'
import { EventService } from './shared/event.service'
import { ISession } from './shared/IEvent.model'

@Component({
  selector: 'create-session',
  templateUrl: 'app/event/create-session.component.html',
  styles: [`
    form { margin-top: 10px; }
    em {float :right ; color:#E05C65; padding-left:10px;}
    .form-group { margin-top: 5px; }
  `]
})
export class CreateSessionComponent implements OnInit{
  @Output() saveNewSession = new EventEmitter()
  @Output() cancelNewSession = new EventEmitter()
  sessionForm:FormGroup
  name: FormControl
  presenter:FormControl
  duration: FormControl
  level: FormControl
  abstract :FormControl
  constructor(private eventService:EventService, private router:Router) {

  }
  ngOnInit(){
    this.name = new FormControl('',Validators.required)
    this.presenter = new FormControl('',Validators.required)
    this.duration = new FormControl('',Validators.required)
    this.level = new FormControl('',Validators.required)
    this.abstract = new FormControl('',Validators.required)
    this.sessionForm = new FormGroup({
      name : this.name,
      presenter : this.presenter,
      duration : this.duration,
      level : this.level,
      abstract : this.abstract
    })

  }

  saveSession(sessionFormValue){
    let session:ISession = {
      id:undefined,
      name: sessionFormValue.name,
      presenter:sessionFormValue.presenter,
      duration: sessionFormValue.duration,
      level: sessionFormValue.level,
      abstract: sessionFormValue.abstract,
      voters: []
    }
    this.saveNewSession.emit(session)
    console.log(sessionFormValue)
  }

  cancel() {
    this.cancelNewSession.emit()
  }
}
