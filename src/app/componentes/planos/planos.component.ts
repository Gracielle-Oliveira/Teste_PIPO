import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {

  public listaCampos: any[] = [];
  public checkedDental = false;
  public checkedMental = false;
  public checkedNorte = false;
  public checkedPampulha = false;
  seguir : boolean = false;
     

  constructor( private route: Router) { }


  ngOnInit(): void {
  }

  norte(){
    this.checkedNorte = !this.checkedNorte    
    const campos = ['nome', 'cpf','dataAdm', 'email']
    this.listaCampos = this.listaCampos.concat(campos) 
  };

  pampulha(){
    this.checkedPampulha = !this.checkedPampulha    
    const campos = ['nome', 'cpf','dataAdm', 'endereco']
    this.listaCampos = this.listaCampos.concat(campos) 
  };

  dental(){
    this.checkedDental = !this.checkedDental    
    const campos = ['nome', 'cpf','peso', 'altura']
    this.listaCampos = this.listaCampos.concat(campos) 
  };

  mental(){
    this.checkedMental = !this.checkedMental    
    const campos = ['cpf', 'horas']
    this.listaCampos = this.listaCampos.concat(campos) 
  };

  prosseguir(){
    const campos = this.listaCampos
    const camposSemRepeticao = [...new Set(campos)];

    window.sessionStorage.setItem('planos', JSON.stringify(camposSemRepeticao.toString()));
    this.route.navigate(['/campos'])
  }
  

}
