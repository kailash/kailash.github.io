import { Component, OnInit } from '@angular/core';
import {fadeAnimation} from  '../../animation';

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [fadeAnimation] 
})
export class SidenavComponent implements OnInit {

  github:string;
  linkedin:string;
  constructor() { }

  ngOnInit() {
    this.github='https://www.github.com/kailash';
    this.linkedin='https://in.linkedin.com/in/kailashadhikari';
  }

  gotoGithub(){
    window.location.href =this.github;
  }

  gotoLinkedin(){
    window.location.href =this.linkedin;
  }

}
