import { TestBed, inject } from '@angular/core/testing';

import { CookieTokenService } from './cookie-token.service';
// https://github.com/salemdar/ngx-cookie#options


describe('CookieTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[],
      providers: [CookieTokenService]
    });
  });

  it('should be created', inject([CookieTokenService], (service: CookieTokenService) => {
    expect(service).toBeTruthy();
  }));

  it('should be create a cookie', inject([CookieTokenService], (service: CookieTokenService) => {
    service.setCookie("token", "az3");
    expect(service.getCookie("token")).toBe("az3");
  }));

  it('should be replace a cookie value even thought the key exists already', inject([CookieTokenService], (service: CookieTokenService) => {
    service.setCookie("token", "az3");
    service.setCookie("token", "re4");
    expect(service.getCookie("token")).toBe("re4");
  }));

  it('should not bug when one get a non existent cookie', inject([CookieTokenService], (service: CookieTokenService) => {
    service.removeAllCookies();
    expect(service.getCookie("token")).toBe("undefined");
  }))
});
