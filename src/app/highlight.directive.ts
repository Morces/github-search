import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('green');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color:any){
    this.elem.nativeElement.style.color = color;
  }
}
