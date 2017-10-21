import { Component, OnInit, Input, OnChanges } from '@angular/core';
import Contact from '../models/Contact';
import { ContactCrudService } from "../services/contact-crud.service";


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  constructor(private contactCrudService: ContactCrudService) { }

 
  selectedContact: Contact;

  isDisplay: boolean = true;
  
  displayClick() {
    this.isDisplay = !this.isDisplay;
  }

  

  ngOnInit() {
    console.log("mon Comp DEtail est init====================================================");
    this.contactCrudService.getSelectedContact().subscribe(
      (result) => {
        console.log("dans le subcribe après return");
        this.selectedContact = result;
      }
      , (error) => console.log('contact-info > ngOnInit > subscribe > error', error)
      , () => console.log('contact-info > ngOnInit > subscribe > unsubscribe') );
  }
}
