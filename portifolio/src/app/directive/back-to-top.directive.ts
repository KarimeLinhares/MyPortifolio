import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackToTop]',
})
export class BackToTopDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScrollPosition() {
    const backToTopButton = this.el.nativeElement;

    if (window.scrollY >= 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }
}
