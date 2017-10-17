import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from "../services/apiRequests.service";
import {Router} from "@angular/router";
import  Group  from "../models/Group";

@Component({
  selector: 'app-liste-group',
  templateUrl: './liste-group.component.html',
  styleUrls: ['./liste-group.component.css'],
  providers: [ApiRequestService]
})
export class ListeGroupComponent implements OnInit {
  
  listeGroupe:Group[] = [];

  constructor(private apiRequestService: ApiRequestService
              , private router: Router) { }

  

  ngOnInit() {
    this.apiRequestService.getGroups ().subscribe(
          (result: Array<Group>) => { this.listeGroupe = result }
          , (error) => console.log("liste-group > ngOnInit > subcribe > error", error)
          , () => console.log("liste-group > ngOnInit > subcribe > unsubscribe"));
  }

  onSelect(group: Group): void {
    this.router.navigate(['/groups', group.id]);
  }

  handleClickGet() {
    console.log('liste groupe:', this.listeGroupe);
    this.apiRequestService.getGroups ().subscribe(
      (result: Array<Group>) => { this.listeGroupe = result }
      , (error) => console.log("liste-group > ngOnInit > subcribe > error", error)
      , () => console.log("liste-group > handleClickGet > subcribe > unsubscribe"));
  }

}
