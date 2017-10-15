import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import Contact from '../models/Contact';
import Conversation from '../models/Conversation';
import Coordonnees from '../models/Coordonnees';
import Group from '../models/Group';
import Message from '../models/Message';
import User from '../models/User';
import Login from "../models/Login";

export const apiUrl = 'http://localhost:8080/atelier/mvc';  // URL to web api

@Injectable()
export class ApiRequestService {

    header=new HttpHeaders({'Authorization': 'Bearer '});
    constructor(private http: HttpClient) { }

    //LOGINS
    postLogin(login: Login): Observable<any> {
      return this.http.post(apiUrl + '/login', login);
    }



    //PROFILS
    getProfils(): Observable<any> {
      return this.http.get(apiUrl + '/profils');       
  }


    //GROUPS : =======================================================================================================
    getGroups(): Observable<any> {
        //this.http.request.arguments.add.headers.add()
        return this.http.get(apiUrl + '/groups' + '/', {headers : this.header});         
    }

    //CONTACTS : =======================================================================================================
  getContacts(idGroup:number): Observable<any> {
    return this.http.get(apiUrl + '/groups' + '/' +  idGroup + '/contacts');
    
  }

  postContact(idGroup:number, contact:Contact): Observable<any> {
     
    delete (contact.id);
    delete (contact.coordonnees.id);
      return this.http.post(apiUrl + '/groups' + '/' + idGroup + '/contact' , contact);
  }

  deleteContact(idGroup:number, contact:Contact) {
    if(contact && contact.id) {
      return this.http.delete(apiUrl + '/groups' + '/' + idGroup + '/contacts' + '/' + contact.id);
    } else {
      throw new Error('pas de contact ou pas d\'ID');
    }
    
  }

  updateContact(idGroup:number, contact:Contact) {
    if(contact && contact.id) {
      return this.http.put(apiUrl + '/groups' + '/' + idGroup + '/contact', contact);
      //return this.http.put(apiUrl + '/groups' + '/' + idGroup + '/contacts' + '/' + contact.id, contact);
    } else {
      throw new Error('pas de contact ou pas d\'ID');
    }
    
  }
}