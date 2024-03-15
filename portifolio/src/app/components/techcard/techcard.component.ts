import { Component } from '@angular/core';
import { database } from 'src/app/database/database';

@Component({
  selector: 'app-techcard',
  templateUrl: './techcard.component.html',
  styleUrls: ['./techcard.component.css'],
})
export class TechcardComponent {
  items = database;
}
