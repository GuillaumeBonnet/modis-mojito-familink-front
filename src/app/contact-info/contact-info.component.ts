import { Component, OnInit, Input } from '@angular/core';
import Contact from '../models/Contact'

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  @Input()
  selectedContact: Contact;

  isDisplay: boolean = true;
  
  displayClick() {
    this.isDisplay = !this.isDisplay;
  }

  constructor() { }

  ngOnInit() {
  }

}
