import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url = 'http://localhost';
  urlImagem = 'http://lorempixel.com/400/200/animals';
  cursoAngular= true;
  valorAtual = '';
  valorSalvo = '';
  isMouseOver: Boolean = false;
  nome: String =  'zabc';
  nomeDoCurso: String = 'Angular';
  pessoa: any = {
    nome: 'def',
    idade: 20
  };

  getValor() {
    return 1;
  }
  getCurtirCurso() {
    return true;
  }
  botaoClicado() {
    alert('botao clicado');
  }
  onKeyUp(event: KeyboardEvent) {
    // console.log(event);
    this.valorAtual = (<HTMLInputElement>event.target).value;
    // console.log((<HTMLInputElement>event.target).value);
  }
  onMudouValor(event) {
    console.log(event);
  }
  salvarValor (valor) {
    this.valorSalvo = valor;
  }
  onMouseOverOut() {
    this.isMouseOver = ! this.isMouseOver;
  }

}
