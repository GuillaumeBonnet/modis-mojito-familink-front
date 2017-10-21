import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ContactCrudService } from "../services/contact-crud.service";
import Contact from "../models/Contact";
import Coordonnees from "../models/Coordonnees";
import Profil from "../models/Profil";

import { ApiRequestService } from "../services/apiRequests.service";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";






@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  emailCtrl : FormControl;
  private nomCtrl: FormControl;
  private prenomCtrl: FormControl;
  private profilCtrl:FormControl;
  private gravatarCtrl:FormControl;
  private codepostalCtrl:FormControl;
  private adresseCtrl:FormControl;
  private villeCtrl:FormControl;
  private telephoneCtrl:FormControl;
  contactForm : FormGroup;
  profils:Profil[] = [];



  constructor(private fb: FormBuilder
              , private apiRequestService: ApiRequestService
              , private contactCrudService: ContactCrudService
              , private route: ActivatedRoute
              , private router: Router) {
// Création des contrôles
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.nomCtrl = fb.control('', [Validators.required]);
    this.prenomCtrl = fb.control('', [Validators.required]);
    this.profilCtrl = fb.control('', [Validators.required]);
    this.telephoneCtrl = fb.control('', [Validators.required]);
    this.adresseCtrl = fb.control('', );


    this.contactForm = fb.group({

      email : this.emailCtrl,
      nom : this.nomCtrl,
      prenom : this.prenomCtrl,
      profil : this.profilCtrl,
      gravatar : this.gravatarCtrl,
      codepostal : this.codepostalCtrl,
      adresse : this.adresseCtrl,
      ville : this.villeCtrl,
      telephone : this.telephoneCtrl,
    });
  }

  ngOnInit() {    
    this.apiRequestService.getProfils()
    .subscribe(
      (retour:any) => {
        this.profils = retour;
      }
      , (erreur) => console.log('create-contact > ngOnInit > subcriber > erreur:', erreur)
      , () => console.log('create-contact > ngOnInit > subcriber > unsubscribe:'));
  }
  handleSubmit (value) {
    

    let contactToPost = new Contact(
        null
        , null
        , this.contactForm.value.nom
        , this.contactForm.value.prenom
        , new Profil(this.contactForm.value.profil, null, null)
        , new Coordonnees(
              null
              , this.contactForm.value.adresse
              , this.contactForm.value.codepostal
              , this.contactForm.value.ville
              , this.contactForm.value.telephone
              , this.contactForm.value.email
                          )
        , this.contactForm.value.gravatar);
    this.contactCrudService.postContact(Number(this.route.parent.snapshot.paramMap.get('groupId')), contactToPost)
    .then(() => this.router.navigate(['/groups', Number(this.route.parent.snapshot.paramMap.get('groupId')), 'contacts', 1]));
    //setTimeout(() => this.router.navigate(['/groups', Number(this.route.parent.snapshot.paramMap.get('groupId')), 'contacts', 1]), 4000);
  }

  handleClear() {
    this.emailCtrl.setValue('');

  }
}
