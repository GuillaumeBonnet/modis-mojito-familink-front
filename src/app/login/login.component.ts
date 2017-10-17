import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
//import { PATH_GROUP } from "../app-routing.module";


import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  private emailCtrl: FormControl;
  private passwordCtrl: FormControl;
  loginForm : FormGroup;

  constructor(private fb: FormBuilder
              , private loginService: LoginService
              , private router: Router) {
    this.loginForm = fb.group({
            email : this.emailCtrl,
            password : this.passwordCtrl
          });
   }

  ngOnInit() {
  }

  handleSubmit (value) {
    let logVal = this.loginForm.value;
    this.loginService.renewToken(logVal.email, logVal.password).subscribe(
      (result) => { if(result) {
                      this.router.navigate(['/groups']);
                    }
                    else {
                      console.log('authentification failed, mettre msg d\'erreur en front');
                    }
                  }
      ,(error) => console.log( 'loginComponent > handleSubmit > subscribe > error:', error)
      ,() => console.log( 'loginComponent > handleSubmit > subscribe > unsubscribe' )
    );
    
  }

}
