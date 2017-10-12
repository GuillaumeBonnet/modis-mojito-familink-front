import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import User from '../models/user';
import Contact from "../models/Contact";


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {



  emailCtrl : FormControl;
  private passwordCtrl:FormControl;
  private password2Ctrl:FormControl;
  private nomCtrl:FormControl;
  private prenomCtrl:FormControl;
  private profilCtrl:FormControl;
  private gravatarCtrl:FormControl;
  private codepostalCtrl:FormControl;
  private villeCtrl:FormControl;
  private telephoneCtrl:FormControl;
  userForm : FormGroup;

//contact : Contact = new Contact ('');
  //user : User = new User();

  constructor(fb: FormBuilder) {

    this.userForm = fb.group({

      email : this.emailCtrl,
      password : this.passwordCtrl,
      password2 : this.password2Ctrl,
      nom : this.nomCtrl,
      prenom : this.prenomCtrl,
      profil : this.profilCtrl,
      gravatar : this.gravatarCtrl,
      codepostal : this.codepostalCtrl,
      ville : this.villeCtrl,
      telephone : this.telephoneCtrl
    });
  }

  ngOnInit() {
  }

  handleSubmit (value) {
    console.log (this.userForm.value);
  }

  handleClear() {  
    this.emailCtrl.setValue('');     
     
  }


}
