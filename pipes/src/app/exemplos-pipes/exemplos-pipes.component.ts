import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  filtro: string;
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };
  livros: String[] = ['Java', 'Angular 2', 'JavaScript', 'CSS', 'Oracle'];
  constructor() { }

  ngOnInit() {
  }
  addCurso(z_value: string) {
    this.livros.push(z_value);
  }


  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(
      v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = Observable.interval(2500)
    .map(valor => 'Valor assíncrono 2');
}
