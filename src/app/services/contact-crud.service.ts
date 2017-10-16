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
        (result) => { this.contactList = result.reverse();
                    this.subjectContactList.next(this.contactList);
                    //return Promise.resolve(true);
                  }
        , (error) => {
                      console.log("une error dans loadList CRUDcontact service subscribe : ", error);
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
            this.contactList.unshift(contact);
            this.subjectContactList.next(this.contactList);
        }
        , (erreur) => console.log('contact-crud > postContact > subscribe > erreur:', erreur)
        , () => console.log('contact-crud > postContact > subscribe > unsubscribe')
      );
    } else {
      throw Error("pas de contact objet");
    }
  }

  //update fonctionne mais retourne une erreur donc le tableau local n'est pas mis à jour
  updateContact(groupId: number, contact:Contact): void {
    if(this.contactList.map(contact => contact.id).includes(contact.id) ) {
      this.apiRequestService.updateContact(groupId, contact).subscribe( 
        (retour) => { this.contactList.splice(this.contactList.findIndex(elem => elem.id === contact.id), 1, contact);
                      this.subjectContactList.next(this.contactList);
        }
        , (erreur) => { console.log('contact-crud > updateContact > subscribe > erreur:', erreur);
      }
        , () => console.log('contact-crud > updateCContact > subscribe > unsubscribe'));
    } else {
      throw Error("pas de contact à modifier");
    }
  
  }
 
  //le back renvoi 200 et body vide. 200 en rest signifie: "OK et envois de ressource suprimée dans le body",
  // donc http.delete essais de parser un body vide -> erreur -> supression en base mais pas en locale
  //si on force le serveur à renvoyer 202(NO-CONTENT) -> supression en base et supression locale
  //https://stackoverflow.com/questions/2342579/http-status-code-for-update-and-delete

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
