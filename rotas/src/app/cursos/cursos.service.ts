import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  getCursos() {
    return [
      { id: 1, nome: 'Angular 2' },
      { id: 2, nome: 'Java' },
      { id: 3, nome: 'JavaScript' },
      { id: 4, nome: 'TypeScript' },
      { id: 4, nome: 'React' }
    ];
  }
  getCurso(id: number) {
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      if (id == cursos[i].id) {
        // console.log(cursos[i]);
        return cursos[i];
      }
    }
    return null;
  }
  constructor() { }

}
