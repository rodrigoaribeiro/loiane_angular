import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;
  incrementa () {
console.log(this.campoValorInput);
this.campoValorInput.nativeElement.value++;
    this.valor++;
    this.mudouValor.emit({type: 'Increment', novoValor: this.valor});
  }
  decrementa() {
    this.valor--;
    this.mudouValor.emit({type: 'Decrement', novoValor: this.valor});
  }
  constructor() { }

  ngOnInit() {
  }

}
