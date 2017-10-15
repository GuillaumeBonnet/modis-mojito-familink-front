import { Component, OnInit } from '@angular/core';



import { ApiRequestService } from "../services/apiRequests.service";
import { ContactCrudService } from "../services/contact-crud.service";
import * as _ from "lodash";

import Contact from "../models/Contact";
import Coordonnees from "../models/Coordonnees";


//PAGE D'EXEMPLE D'UTILISATION DES SERVICES, SUPPRIMABLE PUISQUE CE CODE DE TESTE MANUEL EST COPIE DANS "list-contact.component.manualSpec.ts"

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css'],
  providers: [ApiRequestService, ContactCrudService],
})
export class ListContactComponent implements OnInit {

  listeContact:any = [];
  groupId:number = 2;
  
  constructor(private apiRequestService: ApiRequestService
              , private contactCrudService: ContactCrudService) { }

  ngOnInit() {
    this.contactCrudService.contactListObservable()
          .subscribe(
          (retour:any) => this.listeContact = retour
          , (erreur) => console.log('ListContactComp > ngOnInit > subcriber > erreur:', erreur)
          , () => console.log('ListContactComp > ngOnInit > subcriber > unsubscribe:'));

          this.contactCrudService.loadList(this.groupId);    
  }

  handleClickGet() {
    this.contactCrudService.loadList(this.groupId);
  }

  handleClickDelete() {
    console.log('list-contact > handleClickDelete > contact0=', this.listeContact[0]);
    this.contactCrudService.deleteContact(this.groupId, this.listeContact[0]);
  }

  handleClickUpdate() {
    let contact = _.clone(this.listeContact[0]);
    contact.nom += 'Upd';
    console.log('list-contact > handleClickUpdate > contact0=', contact);
    this.contactCrudService.updateContact(this.groupId, contact);
  }

  handleClickPost() {
    let contact = _.clone(this.listeContact[0]);
    contact.nom += 'Pos';
    contact.coordonnees.email += 'Pos';
    console.log('list-contact > handleClickPost > contact0=', contact);
    this.contactCrudService.postContact(this.groupId, contact);    
  }

}
