import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {
  private alunos: Aluno [] = [
    { id: 1, nome: 'Aluno 0001', email: 'aluno0001@email.com' },
    { id: 2, nome: 'Aluno 0002', email: 'aluno0002@email.com' },
    { id: 3, nome: 'Aluno 0003', email: 'aluno0003@email.com' },
    { id: 4, nome: 'Aluno 0004', email: 'aluno0004@email.com' },
    { id: 5, nome: 'Aluno 0005', email: 'aluno0005@email.com' }
  ];
  getAlunos() {
    return this.alunos;
  }
  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }
  constructor() { }

}
