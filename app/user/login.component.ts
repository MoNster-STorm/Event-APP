import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './authentication.service'
@Component({
  templateUrl : 'app/user/login.component.html',
  styles: [`
    form { margin-top: 10px; }
    em {float :right ; color:#E05C65; padding-left:10px;}
    .form-group { margin-top: 5px; }
  `]
})
export class LoginComponent {
  constructor(private authService:AuthService,private route:Router){

  }
  login(formValue)
  {
    this.authService.authenticateUser(formValue.userName)
    console.log(this.authService.currentUser.id)
    this.route.navigate(['events'])
  }
}
