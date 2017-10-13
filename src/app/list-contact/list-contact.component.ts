import { Component, OnInit } from '@angular/core';

import { ApiRequestService } from "../services/apiRequests.service";
import { ContactCrudService } from "../services/contact-crud.service";

import Contact from "../models/Contact";
import Coordonnees from "../models/Coordonnees";


@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css'],
  providers: [ApiRequestService, ContactCrudService],
})
export class ListContactComponent implements OnInit {

  listeContact:any = [];

  //constructor() { }
  
  constructor(private apiRequestService: ApiRequestService
              , private contactCrudService: ContactCrudService) { }

  ngOnInit() {
    this.contactCrudService.contactListObservable()
          .subscribe(
          (retour:any) => this.listeContact = retour
          , (erreur) => console.log('ListContactComp > ngOnInit > subcriber > erreur:', erreur)
          , () => console.log('ListContactComp > ngOnInit > subcriber > unsubscribe:'));


    // this.contactCrudService.contactListObservable().subscribe(
    //     (retour) => this.listeContact = retour
    //     , (erreur) => console.log('ListContactComp > ngOnInit > subcriber > erreur:', erreur)
    //     , () => console.log('ListContactComp > ngOnInit > subcriber > unsubscribe:'));
    
  }

  handleClickGet() {
    this.contactCrudService.loadList(2);
      //.then().catch();
  }

  handleClickPost() {
    this.contactCrudService.deleteElem();
  //   let contact = new Contact(
  //     null,
  //      null
  //     ,'unNom'
  //     , 'unPrenom'
  //     , null//'senior'
  //     , new Coordonnees(
  //         1
  //         ,'rue de la fontaine'
  //         , 69000
  //         , 'Lyon'
  //         , '04 45 54 45 54'
  //         , 'unEmail@unDomaine.com'
  //     )
  //     , 'https://drafthouse.com/assets/img/victory-red.png'
  // );

  //   this.apiRequestService.postContact(9, contact).subscribe(
  //       (result) => console.log("dans sub post result:", result)
  //       , (erreur) => console.log("dans sub post error:", erreur)
  //       , () => console.log("dans sub post unsub:")
  //   );
    
  }

}
