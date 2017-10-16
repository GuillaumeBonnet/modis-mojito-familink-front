import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from "../services/apiRequests.service";
import  Group  from "../models/Group";

@Component({
  selector: 'app-liste-group',
  templateUrl: './liste-group.component.html',
  styleUrls: ['./liste-group.component.css'],
  providers: [ApiRequestService]
})
export class ListeGroupComponent implements OnInit {
  
  listeGroupe:Group[] = [];

  constructor(private apiRequestService: ApiRequestService) { }

  

  ngOnInit() {
    this.apiRequestService.getGroups ().subscribe(
          (result: Array<Group>) => { this.listeGroupe = result }
          , (error) => console.log("liste-group > ngOnInit > subcribe > error", error)
          , () => console.log("liste-group > ngOnInit > subcribe > unsubscribe"));
  }

  handleClickGet() {
    console.log('liste groupe:', this.listeGroupe);
    this.apiRequestService.getGroups ().subscribe(
      (result: Array<Group>) => { this.listeGroupe = result }
      , (error) => console.log("liste-group > ngOnInit > subcribe > error", error)
      , () => console.log("liste-group > handleClickGet > subcribe > unsubscribe"));
  }

}
