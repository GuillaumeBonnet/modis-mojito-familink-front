import { Component, OnInit, OnChanges } from '@angular/core';



import { ApiRequestService } from "../services/apiRequests.service";
import { ContactCrudService } from "../services/contact-crud.service";
import * as _ from "lodash";

import Contact from "../models/Contact";
import Coordonnees from "../models/Coordonnees";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";


@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css'],
  providers: [ApiRequestService, ContactCrudService],
})
export class ListContactComponent implements OnInit {

  listeContact:any = [];
  groupId:number;
  selectedContact: Contact;
  
  constructor(private apiRequestService: ApiRequestService
              , private contactCrudService: ContactCrudService
              , private route: ActivatedRoute
              ,  private router: Router) { }

  ngOnInit() {
    
    this.contactCrudService.contactListObservable().subscribe(
      (retour:any) => {
        this.listeContact = retour; 
        this.contactCrudService.setSelectedContact(this.listeContact[Number(this.route.firstChild.snapshot.params.contactId)-1]);
      }
      , (erreur) => console.log('ListContactComp > ngOnInit > contactListObservable > subcriber > erreur:', erreur)
      , () => console.log('ListContactComp > ngOnInit > contactListObservable > subcriber > unsubscribe:')
    );

    this.contactCrudService.getSelectedContact().subscribe(
      (result) => this.selectedContact = result
      , (erreur) => console.log('ListContactComp > ngOnInit > getSelectedContact > subcriber > erreur:', erreur)
      , () => console.log('ListContactComp > ngOnInit > getSelectedContact > subcriber > unsubscribe:')
    );
     
  
    
    
    this.groupId = Number(this.route.snapshot.paramMap.get('groupId'));
    this.contactCrudService.loadList(this.groupId);  
  }
  
  onSelect(contact:Contact): void {
    // this.contactCrudService.setSelectedContact(contact);
    this.router.navigate(['/groups', this.groupId, 'contacts', 1]);
    this.contactCrudService.setSelectedContact(contact);
    
    console.log('list-contact > onSelect > contact :', contact);
    
  }


  handleClickRefresh() {
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
    contact.lastName += 'Pos';
    contact.coordonnees.email += 'Pos';
    console.log('list-contact > handleClickPost > contact0=', contact);
    this.contactCrudService.postContact(this.groupId, contact);    
  }

}
