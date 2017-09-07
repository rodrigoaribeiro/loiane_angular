
import { AlunosService } from './../alunos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno: any;
  id: number;
  inscricao: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.aluno = this.alunosService.getAluno(this.id);

      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  editarContato() {
this.router.navigate(['/alunos',this.aluno.id,'editar']);
  }
}
