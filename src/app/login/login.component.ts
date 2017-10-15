import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../assets/font-awesome-4.7.0/css/font-awesome.min.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  private emailCtrl: FormControl;
  private passwordCtrl: FormControl;
  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = fb.group({
      
            email : this.emailCtrl,
            password : this.passwordCtrl
          });
   }

  ngOnInit() {
  }

  handleSubmit (value) {
    let logVal = this.loginForm.value;
    this.loginService.renewToken(logVal.email, logVal.password);
  }

}
