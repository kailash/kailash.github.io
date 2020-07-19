import { Component, OnInit,Input } from '@angular/core';
import {Contact} from '../../domain/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contacts:Array<Contact>;
  contact :Contact;
  constructor() { }

  ngOnInit() {
    this.contacts=[];
    this.contact=new Contact('+91-99XXXXXXXX','Delhi-NCR','India','adhikari.kailash88@gmail.com','','Kailash Adhikari','Software Engineer');
    this.contacts.push(this.contact);
  }

}
