import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { DropdownService } from './../shared/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;
  estados : EstadoBr[];
  constructor(private formBuilder: FormBuilder,
    private http: Http,
  private dropdownService: DropdownService) { }
  ngOnInit() {
     this.dropdownService.getEstadosBr()
     .subscribe(dados => this.estados =dados);
    /*
    this.formulario = new FormGroup({
      nome: new FormControl('digao'),
      email: new FormControl('digao@qualquer.com')
    })
    */
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      email: [null, [Validators.email, Validators.required]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })

    });
  }
  onSubmit() {
    if (this.formulario.valid) {
      console.log('submit');
      console.log(this.formulario.value);
      this.http.post('https://aaahttpbin.org/post', JSON.stringify(this.formulario.value))
        .map(res => res)
        .subscribe(dados => {
          // console.log(dados);
          // reseta o formulário
          if (dados.ok) {
            this.resetar();
          }
        }, (error: any) => alert('erro')
        );
    } else {
      console.log('form invalido');
      this.verificaValidacoes(this.formulario);
    }
  }
  verificaValidacoes(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(
      campo => {
        console.log(campo);
        const controle = formGroup.get(campo);
  controle.markAsTouched();
         controle.markAsDirty();
        if (controle instanceof (FormGroup)) {
          this.verificaValidacoes(controle);
        }


      }
    );

  }
  resetar() {
    // console.log('reset');
    this.formulario.reset();

  }
  verValidTouched(campo) {
    if (this.formulario.get(campo) !== null) {
      return this.formulario.get(campo).touched && !this.formulario.get(campo).valid;
    }
    return false;
  }
  aplicaCssErro(campo) {
    return {
      'has-error': this.verValidTouched(campo),
      'has-feedback': this.verValidTouched(campo)
    }
  }
  verificaEmailInvalido() {
    let campoMail = this.formulario.get('email');
    // console.log(campoMail);
    if (campoMail.errors) {
      return campoMail.errors['email'] && campoMail.touched;
    }

  }
  consultaCEP() {


    let cep = this.formulario.get('endereco.cep').value;

    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.resetaEndereco();
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .map(dados => dados.json())
          .subscribe(dados => {
            this.populaDadosForm(dados);
            // if (dados.cep !== '') { ; }
          }

          );
      }
    }
  }
  resetaEndereco() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });

  }
  populaDadosForm(dados) {

    //    console.log(dados);
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
    if (dados.cep !== undefined) {
      this.formulario.patchValue({
        endereco: {
          cep: dados.cep,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      });
    } else {
      this.formulario.get('endereco.cep').setErrors(['CEP NÃO ENCONTRADO']);
    }
  }
}
