import { Component,OnInit,Inject } from '@angular/core'
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { AuthService } from './authentication.service'
import { Router } from '@angular/router'
import { TOASTR_TOKEN,Toastr } from '../common/toastr.service'
@Component({
  templateUrl:'app/user/profile.component.html',
  styles : [`
   form { margin-top: 10px; }
   em {float :right ; color:#E05C65; padding-left:10px;}
  .error input {background-color:#c57d82;}
  `]
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup
  private firstName :FormControl
  private lastName :FormControl

  constructor(@Inject(TOASTR_TOKEN) private toastr:Toastr,private authService:AuthService,private router : Router){

  }

  ngOnInit(){
  this.firstName = new FormControl(this.authService.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z].*')])
  this.lastName = new FormControl(this.authService.currentUser.lastName,Validators.required)
    this.profileForm = new FormGroup({
      firstName : this.firstName,
      lastName : this.lastName
    })
  }

  saveProfile(profileForm)
  {
    if(this.profileForm.valid){
      this.authService.updateprofile(profileForm)
      this.toastr.success("profile Saved")
      this.router.navigate(['events'])
    }
  }

  validateFirstName(profileForm)
  {
    if(this.firstName.invalid && this.firstName.touched)
      return true
  }

  validateLastName(profileForm)
  {
    if(this.lastName.invalid && this.lastName.touched)
      return true
  }


  cancel(){
    this.router.navigate(['events'])
  }
}
