import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  title: string = '';
  @Input()
  subtitle_a: string = '';
  @Input()
  subtitle_b: string = '';
  @Input()
  link_a: string = '';
  @Input()
  link_b: string = '';
  @Input()
  logo: string = '';
  @Input()
  sublogo_a: string = '';
  @Input()
  sublogo_b: string = '';
  @Input()
  style: string = '';
  @Input()
  width: string = '';
  @Input()
  height: string = '';
}
