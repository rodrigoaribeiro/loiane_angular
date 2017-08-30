import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();
  incrementa () {
    this.valor++;
    this.mudouValor.emit({type: 'Increment', novoValor:this.valor});
  }
  decrementa() {
    this.valor--;
    this.mudouValor.emit({type: 'Decrement', novoValor:this.valor});
  }
  constructor() { }

  ngOnInit() {
  }

}
