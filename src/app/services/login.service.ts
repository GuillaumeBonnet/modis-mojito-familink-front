import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import Login from "../models/Login";

import { ApiRequestService } from "./apiRequests.service";
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private apiRequestService: ApiRequestService ) { } //private cookieService:CookieService

  renewToken(email: string, password: string): Observable<any> {
    let retourObservable = new Subject();
    this.apiRequestService.postLogin(new Login(
                                        email
                                        , password //CryptoJS.MD5(password).toString()
                                        )
                                    ).subscribe(
        (result) => {
            window.localStorage.setItem("tokenAuth", result.token);
            retourObservable.next(true);
            //console.log('loginService > renewToken > subscribe > result: ', result)
        }
        , (error) => { 
            console.log('loginService > renewToken > subscribe > error: ', error)
            retourObservable.next(false);
        }
        , () => { 
            console.log('loginService > renewToken > subscribe > unsubcribe: ');
        }
        
                                    );
      return retourObservable;
        //return Promise.resolve(retourStatus);
    // if(retourStatus) {
    //   return Promise.resolve(retourStatus);
    // }
    // else {
    //   return Promise.reject(retourStatus);
    // }
    
  }

  getToken(): String {
    return window.localStorage.getItem("tokenAuth");
    }

}
