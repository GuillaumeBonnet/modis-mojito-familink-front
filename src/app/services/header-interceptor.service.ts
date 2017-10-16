import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from
  "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { apiUrl } from "./apiRequests.service";

import {  } from "module";
@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {
  
  constructor() {  
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Le traitement est déclenché si la requête sur l'API sample.com
   
   if (req.url.includes(apiUrl)) {
      // Ajout du header Content-Type 
      // => Il est important de noter qu'une requête est immuable, vous devez la cloner
                
      let tokenHeader = new HttpHeaders({'Authorization': window.localStorage.getItem("tokenAuth")});
      const clone = req.clone({ headers : tokenHeader});
                           
      return next.handle(clone);
    }
    return next.handle(req);
  }

}
