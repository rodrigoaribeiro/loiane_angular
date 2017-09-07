import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';


import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter <boolean>();
  constructor(private router: Router) { }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
  fazerLogin(usuario: Usuario) {
    this.usuarioAutenticado = (usuario.nome == 'usuario' && usuario.senha == '123');
    this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
    if (this.usuarioAutenticado) {
      this.router.navigate(['/']);
    }
  }
}
