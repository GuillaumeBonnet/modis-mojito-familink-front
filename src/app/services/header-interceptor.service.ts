import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from
  "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { apiUrl } from "./apiRequests.service";

import { LoginService } from "./login.service";
import {  } from "module";
@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {
  loginService: LoginService;
  constructor(inj: Injector) {
    //this.loginService = inj.get(LoginService);
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Le traitement est déclenché si la requête sur l'API sample.com

    if (req.url.includes('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) {
    //if (req.url.includes(apiUrl)) {
      // Ajout du header Content-Type
      // => Il est important de noter qu'une requête est immuable, vous devez la cloner
      //let varString:String = this.loginService.getToken();
      const clone = req.clone({ setHeaders:  { 'Authorization': 'abs'}
                                               });
    return next.handle(clone);
    }
    return next.handle(req);
  }

}
