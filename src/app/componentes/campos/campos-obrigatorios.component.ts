import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicosService } from 'src/app/service/servicos.service';
import { DataTable } from 'src/app/shared/data.model';

@Component({
  selector: 'campos-obrigatorios',
  templateUrl: './campos-obrigatorios.component.html',
  styleUrls: ['./campos-obrigatorios.component.scss']
})
export class CamposObrigatoriosComponent implements OnInit {

 public i: any;
 public resultado!: any;
 public dados!: DataTable;


  constructor( 
    private router: Router, 
    private service: ServicosService
    ) { }

  ngOnInit(): void {
    this.resultado = this.buscarCampos();
    console.log('Buscar',this.resultado);
    
  }

  nome = new FormControl('', [Validators.required]);
  cpf = new FormControl('', [Validators.required, Validators.maxLength(19)]);
  data = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  endereco = new FormControl('', [Validators.required]);
  peso = new FormControl('', [Validators.required]);
  altura = new FormControl('', [Validators.required]);
  horas = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  buscarCampos(){
    const camposSelecionados = sessionStorage.getItem('planos');
    const valoresCampos = camposSelecionados?.split('"').join("").split(',');
    // const valoresCampos = camposSelecionados?.replace(/[\\"]/g, '');
    console.log(valoresCampos);
    
    // valoresCampos?.splice(this.i - 1 , 1); 
    // valoresCampos?.forEach(e => { 
    //   console.log(valoresCampos);
    // })
    
    // console.log(valoresCampos);
    // return valoresCampos?.join('');

    return valoresCampos;
      
  }

  // alimentarTela(campos: string[] | undefined) {
  //   // debugger;
  //   campos?.forEach(e => {
  //     if (!e && e == 'nome' ) 
  //     {
  //       this.camponome = true;
  //     }
      
  //     if (!e && e == 'cpf' ) 
  //     {
  //       this.campocpf = true;
  //     }
  //   });
  // }

  salvar(){
    this.service.salvarDados(this.dados).subscribe( resp =>{
      console.log(resp);
    })
  }

  voltar(){
    window.history.back()
    this.router.navigate(['/planos'])
  }
}


