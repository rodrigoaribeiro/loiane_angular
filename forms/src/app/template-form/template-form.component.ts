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
    //console.log(form);
    //console.log(this.usuario);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .map(res => res)
      .subscribe(dados => console.log(dados));
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
  consultaCEP(cep, form) {

    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.resetarForm(form);
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados, form)

          );
      }
    }

  }
  populaDadosForm(dados, form) {
    console.log(form);
    console.log(dados);
    /*
    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
        complemento: dados.complemento,
        numero: form.value.endereco.numero
      }    });
*/
    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

  }
  resetarForm(form) {
    form.form.patchValue({
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });

  }

}
