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
    //this.subjectContactList.next("dans loadList");
      
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

  deleteElem(groupId: number, contactId:number): void {
    
    this.subjectContactList.next("dans deleteElem");
  }
}
