import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null
  };
  constructor(private http: Http) { }
  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
  }
  ngOnInit() {
  }
  campoErro(campo) {
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo) {
    let aplica_css: boolean = this.campoErro(campo);
    return {
      'has-error': aplica_css,
      'has-feedback': aplica_css
    };
  }
  consultaCEP(cep) {

    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .map(dados => dados.json())
          .subscribe(dados => console.log(dados)

          );
      }
    }

  }

}
