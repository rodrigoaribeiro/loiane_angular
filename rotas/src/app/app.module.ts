import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app.routing.module';
// import { AlunosModule } from './alunos/alunos.module';
/*
import { CursosComponent } from './cursos/cursos.component';
// import { routing } from './app.routing';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
*/
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guard/auth-guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule// , CursosModule, AlunosModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
