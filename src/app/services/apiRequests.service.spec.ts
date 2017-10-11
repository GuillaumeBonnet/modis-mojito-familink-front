import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { TestBed, inject } from '@angular/core/testing';
import { ApiRequestService } from './apiRequests.service';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import Contact from '../models/Contact';
import Conversation from '../models/Conversation';
import Coordonne from '../models/Coordonne';
import Group from '../models/Group';
import Message from '../models/Message';
import User from '../models/User';


  describe('ApiRequestService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[HttpClientModule],
        providers: [
          ApiRequestService,
        ]
      });
    });
  
    it('should be created', inject([ApiRequestService], (service: ApiRequestService) => {
      expect(service).toBeTruthy();
    }));

    // it('should fail the test', inject([ApiRequestService], (service: ApiRequestService) => {
    //   expect("a").toBe("b");
    // }));
  
    fit('should parse instances of contats', inject([ApiRequestService], (service: ApiRequestService) => {

       service.getContacts(1)
        .subscribe((result:any) => {
      console.log('next');
      console.log('=====tableau de contact', result, '=====tableau de contact');
      expect(result[0]).toBe('Contact');
      expect("a").toBe("guillaumeBonnet");
      }, () => {
      console.log('error');
      fail("Do not fail")
      }, () => {
      console.log('complete');
      });
    }));

    
  
  });


//   getHero(id: number): Promise<Hero> {
//     const url = `${this.heroesUrl}/${id}`;
//     return this.http.get(url)
//       .toPromise()
//       .then(response => response.json().data as Hero)
//       .catch(this.handleError);
//   }

//   delete(id: number): Promise<void> {
//     const url = `${this.heroesUrl}/${id}`;
//     return this.http.delete(url, {headers: this.headers})
//       .toPromise()
//       .then(() => null)
//       .catch(this.handleError);
//   }

//   create(name: string): Promise<Hero> {
//     return this.http
//       .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
//       .toPromise()
//       .then(res => res.json().data as Hero)
//       .catch(this.handleError);
//   }

//   update(hero: Hero): Promise<Hero> {
//     const url = `${this.heroesUrl}/${hero.id}`;
//     return this.http
//       .put(url, JSON.stringify(hero), {headers: this.headers})
//       .toPromise()
//       .then(() => hero)
//       .catch(this.handleError);
//   }

