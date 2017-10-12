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
          this.listeContact = result as Contact[]
          }
        , (error) => console.log(error, "une erruer")
        , () => console.log("unsubscribe")
    );
    
  }

  handleClickGet() {
    console.log('liste :', this.listeContact);
  }

  handleClickPost() {
    let contact = new Contact(
      1
      , null
      ,'unNom'
      , 'unPrenom'
      , ['senior', 'cardilogue']
      , new Coordonne(
          1
          ,'rue de la fontaine'
          , 69000
          , 'Lyon'
          , '04 45 54 45 54'
          , 'unEmail@unDomaine.com'
      )
      , 'https://drafthouse.com/assets/img/victory-red.png'
  );

    this.apiRequestService.postContact(9, contact).subscribe(
        (result) => console.log("dans sub post result:", result)
        , (erreur) => console.log("dans sub post error:", erreur)
        , () => console.log("dans sub post unsub:")
    );
    
  }

}
