import { Directive, ElementRef, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appClosestToCenter]'
})
export class ClosestToCenterDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver = new IntersectionObserver(entries => {});

  @Output() closestToCenter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // Adjust this threshold as needed (0.5 means at least 50% of the element must be visible)
    };

    this.observer = new IntersectionObserver(entries => {
      const isClosestToCenter = entries.some(entry => entry.isIntersecting);
      this.closestToCenter.emit(isClosestToCenter);
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}