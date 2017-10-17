import { Component } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Familink drinks mojito';

  constructor(private route: Router) {}  

  pageIsNotLogin() : boolean {
    if( this.route.url === '/login') {
      return false; 
    }
    else {
      return true; 
    }
  }
}
