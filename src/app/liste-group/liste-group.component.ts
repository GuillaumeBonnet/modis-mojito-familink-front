import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from "../services/apiRequests.service";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import Group from "../models/Group";

@Component({
  selector: 'app-liste-group',
  templateUrl: './liste-group.component.html',
  styleUrls: ['./liste-group.component.css'],
  providers: [ApiRequestService]
})
export class ListeGroupComponent implements OnInit {

  listeGroupe: Group[] = [];
  private nameCtrl: FormControl;
  groupForm: FormGroup;

  constructor(private apiRequestService: ApiRequestService
    , private router: Router, fb: FormBuilder) {
    this.groupForm = fb.group({
      name: this.nameCtrl,
    });
  }



  ngOnInit() {
    this.apiRequestService.getGroups().subscribe(
      (result: Array<Group>) => { this.listeGroupe = result }
      , (error) => console.log("liste-group > ngOnInit > subcribe > error", error)
      , () => console.log("liste-group > ngOnInit > subcribe > unsubscribe"));
  }

  onSelect(group: Group): void {
    this.router.navigate(['/groups', group.id, 'contacts', 1]);
  }

  handleClickGet() {
    console.log('liste groupe:', this.listeGroupe);
    this.apiRequestService.getGroups().subscribe(
      (result: Array<Group>) => { this.listeGroupe = result }
      , (error) => console.log("liste-group > ngOnInit > subcribe > error", error)
      , () => console.log("liste-group > handleClickGet > subcribe > unsubscribe"));
  }


  handleSubmit(value) {
    console.log(this.groupForm.value);
    console.log('liste groupe:', this.listeGroupe);
    this.apiRequestService.postGroup(new Group(null, this.groupForm.value.name, null, null)).subscribe(
      (result: any) => {
        console.log("liste-group > HandleClickPost > subcribe > result", result)
        this.apiRequestService.getGroups().subscribe(
          (result: Array<Group>) => { this.listeGroupe = result }
          , (error) => console.log("liste-group > ngOnInit > subcribe > error", error)
          , () => console.log("liste-group > handleClickGet > subcribe > unsubscribe"));
      
      }
      , (error) => console.log("liste-group > HandleClickPost > subcribe > error", error)
      , () => console.log("liste-group > HandleClickPost > subcribe > unsubscribe"));
  }


}

