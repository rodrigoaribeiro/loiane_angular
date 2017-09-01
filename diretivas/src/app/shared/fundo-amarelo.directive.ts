import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
  //     selector: p'[appFundoAmarelo]' // permite aplicar somente a tag "p"
})
export class FundoAmareloDirective {

  /* exemplo 1 - totalmente funcional
  constructor(private _elementRef: ElementRef) {
    this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    console.log( this._elementRef);
   }
*/
constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
  this._renderer.setElementStyle(this._elementRef.nativeElement, 'backgroundColor', 'yellow');
  // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
  // console.log( this._elementRef);
 }

}
