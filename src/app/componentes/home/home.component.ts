import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from 'src/app/service/servicos.service';
import { DataTable, RespDados } from 'src/app/shared/data.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: RespDados[] = [];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  public response!: RespDados[];
  id!: string

  constructor( 
    private service: ServicosService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.service.getListar().subscribe(dados => {this.response = dados, console.log('Retorno', dados);})
  
  }
  
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
