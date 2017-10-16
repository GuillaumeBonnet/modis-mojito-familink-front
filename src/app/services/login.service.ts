import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import Login from "../models/Login";

import { ApiRequestService } from "./apiRequests.service";
<<<<<<< HEAD
//import { CookieService } from 'ngx-cookie';
@Injectable()
export class LoginService {

  constructor(private apiRequestService: ApiRequestService ) { } //private cookieService:CookieService
=======
import { CookieService } from 'ngx-cookie';
@Injectable()
export class LoginService {

  constructor(private apiRequestService: ApiRequestService, private cookieService:CookieService ) { }
>>>>>>> develop

  renewToken(email: string, password: string): Promise<any> {
    this.apiRequestService.postLogin(new Login(
                                        email
                                        , password //CryptoJS.MD5(password).toString()
                                        )
                                    ).subscribe(
        (result) => {
<<<<<<< HEAD
            //this.cookieService.put("tokenAuth", result.token);
            window.localStorage.setItem("tokenAuth", result.token);
=======
            this.cookieService.put("tokenAuth", result.token);
>>>>>>> develop
            //console.log('loginService > renewToken > subscribe > result: ', result)
        }
        , (error) => console.log('loginService > renewToken > subscribe > error: ', error)
        , () => console.log('loginService > renewToken > subscribe > unsubcribe: ')
                                    );
    
    
    return Promise.resolve(false);
<<<<<<< HEAD
  }

  getToken(): String {
    return window.localStorage.getItem("tokenAuth");
    }
=======
  }  
>>>>>>> develop

}
