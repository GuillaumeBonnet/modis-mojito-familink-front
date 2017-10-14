import { Component, OnInit, Input } from '@angular/core';
import Contact from "../../models/Contact";

@Component({
  selector: 'app-list-contact-item',
  templateUrl: './list-contact-item.component.html',
  styleUrls: ['./list-contact-item.component.css']
})
export class ListContactItemComponent implements OnInit {

  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
