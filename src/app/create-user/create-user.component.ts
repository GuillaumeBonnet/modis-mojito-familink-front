import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import * as CryptoJS from 'crypto-js';
import Profil from '../models/Profil';
import User from '../models/User';
import { Router } from "@angular/router";
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

  profils: Profil[] = [];
  emailCtrl: FormControl;
  private passwordCtrl: FormControl;
  private password2Ctrl: FormControl;
  private nomCtrl: FormControl;
  private prenomCtrl: FormControl;
  private profilCtrl: FormControl;
  private gravatarCtrl: FormControl;
  private codepostalCtrl: FormControl;
  private villeCtrl: FormControl;
  private telephoneCtrl: FormControl;
  private adresseCtrl: FormControl;
  userForm: FormGroup;


  constructor(private router: Router, fb: FormBuilder, private apiRequestService: ApiRequestService) {
    // Création des contrôles
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required]);
    this.password2Ctrl = fb.control('', [Validators.required]);
    this.nomCtrl = fb.control('', [Validators.required]);
    this.prenomCtrl = fb.control('', [Validators.required]);
    this.profilCtrl = fb.control('', [Validators.required]);
    this.telephoneCtrl = fb.control('', [Validators.required]);


    this.userForm = fb.group({

      email: this.emailCtrl,
      password: this.passwordCtrl,
      password2: this.password2Ctrl,
      nom: this.nomCtrl,
      prenom: this.prenomCtrl,
      profil: this.profilCtrl,
      gravatar: this.gravatarCtrl,
      codepostal: this.codepostalCtrl,
      ville: this.villeCtrl,
      telephone: this.telephoneCtrl,
      adresse: this.adresseCtrl
    });
  }

  ngOnInit() {
    this.apiRequestService.getProfils().subscribe(
      (retour: any) => { this.profils = retour; }, 
      (erreur) => 
      console.log('create-user > ngOnInit > subcriber > erreur:', erreur), 
      () => console.log('create-user > ngOnInit > subcriber > unsubscribe:'));
  }

  handleSubmit(value) {
    console.log(this.userForm.value.email);
    let user = new User(
      null,
      new Contact(
        null
        , null
        , this.userForm.value.nom
        , this.userForm.value.prenom
        ,
        new Profil(
          this.userForm.value.profil,
          null,
          null
        )
        , new Coordonnees(
          null
          , this.userForm.value.adresse
          , this.userForm.value.codepostal
          , this.userForm.value.ville
          , this.userForm.value.telephone
          , this.userForm.value.email
        )
        , this.userForm.value.gravatar
      )
      , CryptoJS.MD5(this.userForm.value.password).toString()//this.userForm.value.password
    )
    console.log(user)
    console.log(user.contact)
    console.log(user.contact.coordonnees)
    console.log(user.contact.profil)
    this.apiRequestService.postUser(user).subscribe(
      (result) => {
        console.log("dans sub post result:", result)
        this.router.navigate(['/login']);
      }
      , (erreur) => console.log("dans sub post error:", erreur)
      , () => console.log("dans sub post unsub:")
    );


  }

  handleClear() {
    this.emailCtrl.setValue('');

  }

}
