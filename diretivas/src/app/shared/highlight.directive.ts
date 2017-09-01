import { Directive, OnInit, HostListener, ElementRef, Renderer, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  implements OnInit{
  @Input() defaultColor: String = 'white';
  @Input('appHighlight') highlightColor: String = 'yellow';
  @HostBinding ('style.backgroundColor') backgroundColor: String;
  @HostListener('mouseenter')onmouseover () {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave')onmouseleave  () {
    this.backgroundColor = this.defaultColor;
  }
  constructor() {  }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    console.log(this.defaultColor);
  }

}
