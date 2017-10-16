import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import Login from "../models/Login";

import { ApiRequestService } from "./apiRequests.service";
//import { CookieService } from 'ngx-cookie';
@Injectable()
export class LoginService {

  constructor(private apiRequestService: ApiRequestService ) { } //private cookieService:CookieService

  renewToken(email: string, password: string): Promise<any> {
    this.apiRequestService.postLogin(new Login(
                                        email
                                        , password //CryptoJS.MD5(password).toString()
                                        )
                                    ).subscribe(
        (result) => {
            window.localStorage.setItem("tokenAuth", result.token);
            //console.log('loginService > renewToken > subscribe > result: ', result)
        }
        , (error) => console.log('loginService > renewToken > subscribe > error: ', error)
        , () => console.log('loginService > renewToken > subscribe > unsubcribe: ')
                                    );
    
    
    return Promise.resolve(false);
  }

  getToken(): String {
    return window.localStorage.getItem("tokenAuth");
    }

}
