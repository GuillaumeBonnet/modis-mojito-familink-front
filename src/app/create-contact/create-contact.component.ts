import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css', '../../assets/font-awesome-4.7.0/css/font-awesome.min.css']
})
export class CreateContactComponent implements OnInit {

  emailCtrl : FormControl;
  private nomCtrl: FormControl;
  private prenomCtrl: FormControl;
  private profilCtrl:FormControl;
  private gravatarCtrl:FormControl;
  private codepostalCtrl:FormControl;
  private villeCtrl:FormControl;
  private telephoneCtrl:FormControl;
  contactForm : FormGroup;



  constructor(fb: FormBuilder) {
// Création des contrôles
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.nomCtrl = fb.control('', [Validators.required]);
    this.prenomCtrl = fb.control('', [Validators.required]);
    this.profilCtrl = fb.control('', [Validators.required]);
    this.telephoneCtrl = fb.control('', [Validators.required]);

   //this.nomCtrl = fb.control('');

    this.contactForm = fb.group({

      email : this.emailCtrl,
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
    console.log (this.contactForm.value);
  }

  handleClear() {
    this.emailCtrl.setValue('');

  }
}
