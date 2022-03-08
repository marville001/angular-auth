import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    email:"",
    password:""
  }
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log({res});
        
        // localStorage.setItem('token', res.token)
        // this._router.navigate(['/special'])
      },
      err => console.log(err)
    ) 
    
  }

}
