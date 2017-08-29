import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }
  getCursos= () =>  ['Java', 'Angular', 'JavaScript', 'TtypeScript', 'ionic', 'React', 'CSS', 'C#' ];

}
