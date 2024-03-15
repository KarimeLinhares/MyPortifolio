import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css'],
})
export class ImgCardComponent {
  @Input()
  techImg: string = '';
}
