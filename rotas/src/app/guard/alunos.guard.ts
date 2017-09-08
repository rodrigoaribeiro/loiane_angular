import { Injectable } from '@angular/core';
import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
/*
    console.log('AuthGuard - ALUNOS -  CanActivateChild');
    console.log(state.url);
    console.log(state);
    console.log('---------------');

    console.log(route);
*/
    /*
    if (route.url.toString().indexOf( 'editar') > 0 ||  route.url.toString().indexOf('novo') >0 ) {
      return false;
    } */
    return true;
    /*
    if (state.url == '/alunos') {
      return true;
    }
    return false; */
  }

}
