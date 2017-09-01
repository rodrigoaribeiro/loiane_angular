import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {
  @HostBinding ('style.backgroundColor') backgroundColor: String;
  /* Exemplo 1 funciona perfeitamente
  @HostListener('mouseenter')onmouseover () {
    // console.log ('mouseover');
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'backgroundColor', 'yellow'
    );
  }
  @HostListener('mouseleave')onmouseleave  () {
    // console.log ('this._elementRef.nativeElement');
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'backgroundColor', ''
    );

  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }
  */
  @HostListener('mouseenter')onmouseover () {
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave')onmouseleave  () {
    this.backgroundColor = '';
  }
  constructor() {

  }
}
