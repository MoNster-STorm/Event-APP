import { Injectable } from '@angular/core'
import { IUser } from './IUser.model'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
  currentUser : IUser
  constructor(private route : Router){

  }

  authenticateUser(firstName:string)
  {
    this.currentUser = {
      id:1,
      firstName : firstName,
      lastName : "Gupta"
      }
  }

  isAuthenticated()
  {
    return !!this.currentUser;
  }

  deAuthenticate(){
    this.currentUser = null
    this.route.navigate(['user/login'])
    }

    updateprofile(profileForm){
      this.currentUser.firstName = profileForm.firstName
      this.currentUser.lastName = profileForm.lastName

      console.log(this.currentUser.id)
    }

}
