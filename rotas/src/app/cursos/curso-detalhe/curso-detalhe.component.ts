import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';


import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: number;
  curso: any;
  inscricao: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService

  ) {
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.curso = this.cursoService.getCurso(this.id);
        if (this.curso == null) {
          this.router.navigate(['/cursos/naoEncontrado']);

        }
      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
