import { Injectable } from '@angular/core'
import { IUser } from '../user/IUser.model'
import { ISession } from './shared/IEvent.model'

@Injectable()

export class VoterService {


  addVote(name:string,session:ISession)
  {
    session.voters.push(name)
  }

  deleteVote(name:string,session:ISession)
  {
    session.voters = session.voters.filter(voter => voter !== name)
  }

  userHasVoted(name:string,session:ISession){
    return session.voters.some(voter => voter === name)
  }
}
