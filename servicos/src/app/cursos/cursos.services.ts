import { Injectable } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {
  private cursos: String[] = ['Angular', 'CSS', 'Java', 'Javascript', 'TypeScript', 'BootStrap'];

  constructor(private logService: LogService) { }

  getCursos() {
    this.logService.consoleLog('GetCursos');
    this.cursos.sort();
    return this.cursos;
  }
  addCurso(curso: String) {
    this.logService.consoleLog(`addCursos ${curso}` );
    this.cursos.push(curso);
  }
}
