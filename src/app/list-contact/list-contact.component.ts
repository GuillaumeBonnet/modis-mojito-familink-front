import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from "../services/apiRequests.service";

import Contact from "../models/Contact";
import Coordonne from "../models/Coordonne";


@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css'],
  providers: [ApiRequestService]
})
export class ListContactComponent implements OnInit {

  listeContact:Array<Contact> = [];

  constructor(private apiRequestService: ApiRequestService) { }

  ngOnInit() {
    this.apiRequestService.getContacts(9).subscribe(
        (result) => this.listeContact = result.map((elem:any) => 
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
        , (error) => console.log(error, "une erruer")
        , () => console.log("unsubscribe")
    );
    console.log();
  }

}
