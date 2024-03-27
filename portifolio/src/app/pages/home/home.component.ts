import {
  Component,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { BigcardComponent } from '../../components/bigcard/bigcard.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  showBackToTop = false;
  @ViewChildren(MenuBarComponent, { read: ElementRef }) menuBar!: QueryList<
    ElementRef<MenuBarComponent>
  >;
  @ViewChildren(BigcardComponent, { read: ElementRef }) bigCard!: QueryList<
    ElementRef<BigcardComponent>
  >;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.markForCheck();
    setTimeout(() => {
      this.showBackToTop =
        this.menuBar.toArray().length > 0 && this.bigCard.toArray().length > 0;
      this.cdr.markForCheck();
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
