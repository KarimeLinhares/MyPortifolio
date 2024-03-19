import { Component } from '@angular/core';
import { data } from 'src/app/database/data';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css'],
})
export class ProjectsCardComponent {
  items = data;
}
