import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';


@Injectable()
export class CookieTokenService {

  constructor(private _cookieService:CookieService) { }

  getCookie(key: string){
    return this._cookieService.get(key);
  }

  setCookie(key: string, value:string) {
    return this._cookieService.put(key, value);
  }

  removeOneCooke(key: string) {
    this._cookieService.remove(key);
  }

  removeAllCookies() {
    this._cookieService.removeAll;
  }

}
