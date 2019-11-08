import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutlineComponent } from './components/outline/outline.component';
import { SkillsComponent } from './components/skills/skills.component';
import {ExperienceComponent} from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardComponent } from './components/card/card.component';


const routes: Routes = [
  {
    path:'',
    component:OutlineComponent,
    children:[
      {path:'',component:OutlineComponent,outlet:'side'}
    ]
  },
  {
    path:'me',
    component:OutlineComponent,
    children:[
      {path:'me',component:OutlineComponent,outlet:'side'}
    ]
  },
  {
    path:'skills',
    component:SkillsComponent,
    children:[
      {path:'skills',component:SkillsComponent,outlet:'side'}
    ]
  },
  {
    path:'experience',
    component:ExperienceComponent,
    children:[
      {path:'experience',component:ExperienceComponent,outlet:'side'}
    ]
  },
  {
    path:'education',
    component:EducationComponent,
    children:[
      {path:'education',component:EducationComponent,outlet:'side'}
    ]
  },
  {
    path:'contact',
    component:ContactComponent,
    children:[
      {path:'contact',component:ContactComponent,outlet:'side'}
    ]
  },{
    path:'card',
    component:CardComponent,
    children:[
      {path:'contact',component:CardComponent,outlet:'side'}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
