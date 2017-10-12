import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';


import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import Contact from '../models/Contact';
import Conversation from '../models/Conversation';
import Coordonnees from '../models/Coordonnees';
import Group from '../models/Group';
import Message from '../models/Message';
import User from '../models/User';

@Injectable()
export class ApiRequestService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:8080/atelier/mvc';  // URL to web api
  //private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


    //GROUPS : =======================================================================================================
    getGroups(): Observable<any> {
        return this.http.get(this.apiUrl + '/groups')
        .map((elem:any) => 
            new Contact(
                    elem.id,
                    elem.group
                    , elem.nom
                    , elem.prenom
                    , elem.profil
                    , new Coordonnees(
                            elem.coordonnees.id
                            ,elem.coordonnees.adresse
                            , elem.coordonnees.codePostal
                            , elem.coordonnees.ville
                            , elem.coordonnees.phone
                            , elem.coordonnees.email
                                    )
                  , elem.gravatar)
          );
    }

    //CONTACTS : =======================================================================================================
  getContacts(idGroup:number): Observable<any> {
    return this.http.get(this.apiUrl + '/groups' + '/' +  idGroup + '/contacts');
    
  }

  postContact(idGroup:number, contact:Contact): Observable<any> {
     
    delete (contact.id);
    delete (contact.coordonnees.id);
      return this.http.post(this.apiUrl + '/groups' + '/' + idGroup + '/contact' , contact);
  }

  private handleError(error: any): Promise<any> { //méthodes appellée à l'endroit ou l'on subscribe un observable
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}