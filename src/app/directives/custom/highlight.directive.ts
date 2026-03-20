import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el :ElementRef) { }

  @HostListener('click')
  onClick(){
    this.el.nativeElement.style.color="red"
  }

}
