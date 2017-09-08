import { Injectable } from '@angular/core';
import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class CursosGuard implements CanActivateChild {
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('AuthGuard - CanActivateChild');

    return true;
  }

}
