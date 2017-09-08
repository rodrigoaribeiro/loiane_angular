import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { IFormCanDeactivate } from './iform-candeactivate';


import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
  canDeactivate(
    component: AlunoFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('on canDeactivate');
    return component.podeMudarRota();
  }
}
