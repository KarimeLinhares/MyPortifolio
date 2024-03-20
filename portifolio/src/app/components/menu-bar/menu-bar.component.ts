import { Component } from '@angular/core';
import { LandingButtonService } from 'src/app/service/landing-button.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  constructor(private LandingButtonService: LandingButtonService) {}
  scrollToSection(): void {
    this.LandingButtonService.scrollToSection('target-section');
  }
}
