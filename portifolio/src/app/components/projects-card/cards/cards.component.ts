import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input()
  projImg: string = '';
  @Input()
  title: string = '';
  @Input()
  sub: string = '';
  @Input()
  tech: string = '';
  @Input()
  view: string = '';
  @Input()
  code: string = '';
}
