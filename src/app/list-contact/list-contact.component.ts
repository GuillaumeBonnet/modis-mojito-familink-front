import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from "../services/apiRequests.service";

import Contact from "../models/Contact";
import Coordonne from "../models/Coordonne";


@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css'],
  providers: [ApiRequestService],
})
export class ListContactComponent implements OnInit {

  listeContact:Array<Contact> = [];

  //constructor() { }
  
  constructor(private apiRequestService: ApiRequestService) { }

  ngOnInit() {
    // this.apiRequestService.getContacts(9).toPromise()
    //   .then((result) => {
    //     console.log('=====tableau de contacto', result, '=====tableau de contact');
    //     this.listeContact = result 
    //       .map(elem => new Contact(
    //           elem.id
    //           , elem.group
    //           , elem.nom
    //           , elem.prenom
    //           , elem.profil
    //           , new Coordonne(
    //                   elem.coordonnees.id
    //                   ,elem.coordonnees.adresse
    //                   , elem.coordonnees.codePostal
    //                   , elem.coordonnees.ville
    //                   , elem.coordonnees.phone
    //                   , elem.coordonnees.email
    //                           )
    //           , elem.gravatar));
    //           console.log(this.listeContact);
    //   });



    this.apiRequestService.getContacts(9).subscribe(
        (result: Array<Contact>) => { this.listeContact = result.map((elem:any) => 
                  new Contact(
                          elem.id
                          , elem.group
                          , elem.nom
                          , elem.prenom
                          , elem.profil
                          , new Coordonne(
                                  elem.coordonnees.id
                                  ,elem.coordonnees.adresse
                                  , elem.coordonnees.codePostal
                                  , elem.coordonnees.ville
                                  , elem.coordonnees.phone
                                  , elem.coordonnees.email
                                          )
                        , elem.gravatar)
        ) 
          console.log(this.listeContact, 'dans subscribse');
          }
        , (error) => console.log(error, "une erruer")
        , () => console.log("unsubscribe")
    );
    
  }

  handleClick() {
    console.log('liste :', this.listeContact);
  }

}
