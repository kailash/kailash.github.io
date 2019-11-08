import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/domain/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations:Array<Education>;
  education :Education;
  constructor() { 
    
  }

  ngOnInit() {
    this.educations=[];
    this.education=new Education('Master of Computer Application','GGSIPU','New Delhi (India)');
    this.educations.push(this.education);
    this.education=new Education('Bachelor of Computer Science','Delhi University','New Delhi (India)');
    this.educations.push(this.education);
  }

}
