import { Component, OnInit } from '@angular/core';

import { CursosService} from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomePortal: string;
  cursos: string[];
  constructor ( cursosService: CursosService) {
    this.nomePortal = 'nomesite.com.br';
    // let servico = new CursosService();
    this.cursos = cursosService.getCursos();
  }
}
