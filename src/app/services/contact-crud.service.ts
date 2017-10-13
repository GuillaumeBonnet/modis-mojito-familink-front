import { Injectable } from '@angular/core';
import Contact from '../models/Contact';
import { ApiRequestService } from "./apiRequests.service";
import { Observable, Subject } from 'rxjs';
//import { Rx } from 'rxjs';



@Injectable()
export class ContactCrudService {

  contactList : Contact[] = [];
  subjectContactList = new Subject();

  constructor(private apiRequestService: ApiRequestService) { }

  contactListObservable(): Observable<any> {
      return this.subjectContactList;
  }

  loadList(groupId: number):any {      
      this.apiRequestService.getContacts(groupId).subscribe(
        (result) => { this.contactList = result;
                    this.subjectContactList.next(this.contactList);
                    //return Promise.resolve(true);
                  }
        , (error) => {
                      console.log(error, "une erruer dans loadList CRUDcontact service subscribe");
                      //return Promise.reject("une erruer dans loadList CRUDcontact service subscribe");
                    }
        , () => {
                console.log("unsubscribe-contact loadList CRUDcontact service");
                //return Promise.reject("unsubscribe-contact loadList CRUDcontact service");
              }     
      );
  }

  postContact(groupId: number, contact:Contact): void {
    if(contact) {
      this.apiRequestService.postContact(groupId, contact).subscribe(
        (retour) => { //todo retour parse id et insérer dans idContact et idCoordonnees
            this.contactList.push(contact);
            this.subjectContactList.next(this.contactList);
        }
        , (erreur) => console.log('contact-crud > postContact > subscribe > erreur:', erreur)
        , () => console.log('contact-crud > postContact > subscribe > unsubscribe')
      );
    } else {
      throw Error("pas de contact objet");
    }
  }

  updateContact(groupId: number, contact:Contact): void {
    if(this.contactList.includes(contact) ) {
      this.apiRequestService.updateContact(groupId, contact).subscribe( 
        (retour) => { this.contactList.splice(this.contactList.findIndex(elem => elem === contact), 1, contact); //NOT tested
                      this.subjectContactList.next(this.contactList);
        }
        , (erreur) => console.log('contact-crud > deleteContact > subscribe > erreur:', erreur)
        , () => console.log('contact-crud > deleteContact > subscribe > unsubscribe'));
    } else {
      throw Error("pas de contact à modifier");
    }
  
  }

  deleteContact(groupId: number, contact:Contact): void {
    if(this.contactList.includes(contact) ) {
      this.apiRequestService.deleteContact(groupId, contact).subscribe( 
        (retour) => { this.contactList.splice(this.contactList.findIndex(elem => elem === contact), 1); //NOT tested
                      this.subjectContactList.next(this.contactList);
        }
        , (erreur) => console.log('contact-crud > deleteContact > subscribe > erreur:', erreur)
        , () => console.log('contact-crud > deleteContact > subscribe > unsubscribe'));
    } else {
      throw Error("pas de contact à modifier");
    }
       
  }
}
