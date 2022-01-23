import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ServicosService } from 'src/app/service/servicos.service';
import { DataTable } from 'src/app/shared/data.model';
import { MensagensComponent } from 'src/app/shared/mensagens/mensagens.component';

@Component({
  selector: 'campos-obrigatorios',
  templateUrl: './campos-obrigatorios.component.html',
  styleUrls: ['./campos-obrigatorios.component.scss']
})
export class CamposObrigatoriosComponent implements OnInit {

 public formulario!: FormGroup;
 public valoresCampos: any;
 @ViewChild('msg') mensagem!: MensagensComponent;


  constructor(
    private router: Router,
    private service: ServicosService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.buscarCampos();
    this.iniciarFomulario();
  }


  iniciarFomulario(){
    this.formulario = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required] ),
      cpf : this.formBuilder.control('', [Validators.required, Validators.maxLength(19)]),
      data : this.formBuilder.control('', [Validators.required]),
      email : this.formBuilder.control('', [Validators.required, Validators.email]),
      endereco : this.formBuilder.control('', [Validators.required]),
      peso : this.formBuilder.control('', [Validators.required]),
      altura : this.formBuilder.control('', [Validators.required]),
      horas : this.formBuilder.control('', [Validators.required])
    })
  }

  getErro(input: string) {
   return this.formulario.controls[input].invalid &&
   this.formulario.controls[input].touched &&
   this.formulario.controls[input].errors
  }

  buscarCampos(){
    const camposSelecionados = sessionStorage.getItem('planos');
    this.valoresCampos = camposSelecionados?.split('"').join("").split(',');
  }
  
  salvar(){
    const form = this.formulario.getRawValue();
    this.service.salvarDados(form).subscribe( resp =>{
      if(resp) {
        this.mensagem
         this.router.navigate(['/'])
        }
    })
  }

  voltar(){
    this.router.navigate(['/planos'])
  }
}


