import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const alunosRoutes = [
  {
//    path: 'alunos', component: AlunosComponent, children: [
  path: '', component: AlunosComponent, children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunoFormComponent }]
  }
];

/* versão 1

const alunosRoutes = [
  { path: 'alunos', component: AlunosComponent },
  { path: 'alunos/novo', component: AlunoFormComponent },
  { path: 'alunos/:id', component: AlunoDetalheComponent },
  { path: 'alunos/:id/editar', component: AlunoFormComponent }
];
 */
@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
