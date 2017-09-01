import { Component, OnInit } from '@angular/core';


import {CursosService} from './cursos.services';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]

})
export class CursosComponent implements OnInit {
  cursos: String[]  = [];

  constructor(private cursosServic: CursosService) {
    this.cursos = this.cursosServic.getCursos();

   }

  ngOnInit() {

  }

}
