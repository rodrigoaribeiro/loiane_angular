import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {
  aluno: any;
  id: number;
  inscricao: Subscription;
  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.aluno = this.alunosService.getAluno(this.id);
        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }


}
