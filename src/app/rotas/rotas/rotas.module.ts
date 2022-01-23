import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RotasRoutingModule } from '../rotas/rotas-routing.module';
import { CamposObrigatoriosComponent } from '../../componentes/campos/campos-obrigatorios.component';
import { PlanosComponent } from '../../componentes/planos/planos.component';
import { HomeComponent } from '../../componentes/home/home.component';
import { MensagensComponent } from '../../shared/mensagens/mensagens.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule} from '@angular/material/checkbox';  
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxMaskModule } from 'ngx-mask';    



@NgModule({
  declarations: [
    CamposObrigatoriosComponent,
    PlanosComponent,
    HomeComponent,
    MensagensComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RotasRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
  ],
  providers:  [
  ]
})
export class RotasModule { }
