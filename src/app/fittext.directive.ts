import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';
import { FittextService } from './fittext.service';

@Directive({
  selector: '[fittext]'
})
export class FittextDirective {

  constructor(private el: ElementRef, private fittextService: FittextService) { 
    var me = this;
    fittextService.adjustFontSize$.subscribe(() => {
      me.t();
    });    
   }

  adjustFontSize() {
    const container = this.el.nativeElement as HTMLElement;
    const text = container.children[0] as HTMLElement;
    if(text == undefined) {
      return;
    }
    const elements = text.querySelectorAll('*');
   
    let fontSize = 1;
    text.style.fontSize = fontSize + 'px';
    elements.forEach(input => (input as HTMLElement).style.fontSize = fontSize + 'px');

    var iterations = 0;
    // make text bigger until it reaches or overflows the container horizontally or vertically
    while (this.textFitsContainer(text, container) && iterations < 100) {
      fontSize++;
      text.style.fontSize = fontSize + 'px';
      elements.forEach(input => (input as HTMLElement).style.fontSize = fontSize + 'px');
      iterations++;
    }
    // make text smaller until it fits horizontally and vertically
    while (!this.textFitsContainer(text, container) && iterations < 100) {
      fontSize--;
      text.style.fontSize = fontSize + 'px';
      elements.forEach(input => (input as HTMLElement).style.fontSize = fontSize + 'px');
      iterations++;
    }
  }
  
  textFitsContainer(text: HTMLElement, container: HTMLElement) {
    const containerComputedStyle = window.getComputedStyle(container);
    const containerWidth = container.clientWidth - parseFloat(containerComputedStyle.paddingLeft) - parseFloat(containerComputedStyle.paddingRight);
    const containerHeight = container.clientHeight - parseFloat(containerComputedStyle.paddingTop) - parseFloat(containerComputedStyle.paddingBottom);
    
    const textComputedStyle = window.getComputedStyle(text);
    const textMargin = parseFloat(textComputedStyle.marginTop) + parseFloat(textComputedStyle.marginBottom); 
    const textPadding = parseFloat(textComputedStyle.paddingTop) + parseFloat(textComputedStyle.paddingBottom); 
    
    const padding = 5; // the padding is added because sometimes the measurements dont work without it

    return text.scrollWidth <= containerWidth + padding && text.scrollHeight + textMargin + textPadding <= containerHeight + padding;
  }

  @HostListener('window:resize')
  onResize() {
    this.adjustFontSize();
  }

  @HostListener('window:load')
  onLoad() {
    this.t();
  }

  t() {
    this.adjustFontSize();
    var me = this;
    setTimeout(() => me.adjustFontSize(), 10);
    setTimeout(() => me.adjustFontSize(), 1000);
  }
}