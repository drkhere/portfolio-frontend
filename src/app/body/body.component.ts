import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-body',
  imports: [IntroComponent,SkillsComponent,ProjectsComponent,ContactsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
