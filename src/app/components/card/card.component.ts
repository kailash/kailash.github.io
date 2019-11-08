import { Component, OnInit, Input } from '@angular/core';
import { Education } from 'src/app/domain/Education';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  education:Education;

  constructor() { }



  ngOnInit() {
  }

}
