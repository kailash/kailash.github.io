import { Component, OnInit,Input } from '@angular/core';
import {Contact} from '../../domain/Contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input()
  contact:Contact;
  constructor() { }

  ngOnInit() {
  }

  downloadResume(){
    let link = document.createElement("a");
    link.download = "Kailash-Adhikari_resume.pdf";
    link.href = "/assets/resume/Resume_alt.pdf";
    link.click();
  }

}
