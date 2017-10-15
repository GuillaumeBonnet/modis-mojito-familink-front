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
import Login from "../models/Login";

@Injectable()
export class ApiRequestService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:8080/atelier/mvc';  // URL to web api

  constructor(private http: HttpClient) { }
    //PROFILS
    getProfils(): Observable<any> {
      return this.http.get(this.apiUrl + '/profils');       
  }

    //LOGINS
    postLogin(login: Login): Observable<any> {
      return this.http.post(this.apiUrl + '/login', login);
    }



    //PROFILS
    getProfils(): Observable<any> {
      return this.http.get(this.apiUrl + '/profils');       
  }


    //GROUPS : =======================================================================================================
    getGroups(): Observable<any> {
        //this.http.request.arguments.add.headers.add()
        return this.http.get(this.apiUrl + '/groups' + '/');         
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

  deleteContact(idGroup:number, contact:Contact) {
    if(contact && contact.id) {
      return this.http.delete(this.apiUrl + '/groups' + '/' + idGroup + '/contacts' + '/' + contact.id);
    } else {
      throw new Error('pas de contact ou pas d\'ID');
    }
    
  }

  updateContact(idGroup:number, contact:Contact) {
    if(contact && contact.id) {
      return this.http.put(this.apiUrl + '/groups' + '/' + idGroup + '/contact', contact);
      //return this.http.put(this.apiUrl + '/groups' + '/' + idGroup + '/contacts' + '/' + contact.id, contact);
    } else {
      throw new Error('pas de contact ou pas d\'ID');
    }
    
  }
}