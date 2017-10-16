import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

import User from '../models/User';
import Contact from "../models/Contact";
import Coordonnees from "../models/Coordonnees";
import { ApiRequestService } from "../services/apiRequests.service";



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',

  styleUrls: ['./create-user.component.css'],
  providers: [ApiRequestService],

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




  constructor(fb: FormBuilder, private apiRequestService: ApiRequestService) {


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

    console.log(this.userForm.value.email);
    let contact = new Contact(
        null
      , null
      , this.userForm.value.nom
      , this.userForm.value.prenom
      , null
      , new Coordonnees(
          null
          , null
          , this.userForm.value.codepostal
          , this.userForm.value.ville
          , this.userForm.value.telephone
          , this.userForm.value.email
                        )
      , this.userForm.value.gravatar)
      this.apiRequestService.postContact(5, contact).subscribe(
        (result) => console.log("dans sub post result:", result)
        , (erreur) => console.log("dans sub post error:", erreur)
        , () => console.log("dans sub post unsub:")
    );

  }

  handleClear() {  
    this.emailCtrl.setValue('');     
     
  }


}
