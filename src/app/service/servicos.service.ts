import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { DataTable } from '../shared/data.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor( private http: HttpClient) { }

  url!: 'http://localhost:3000/dados';

 salvarDados(dados: DataTable){
   console.log(dados);
   return this.http.post<DataTable>(this.url, dados)
    .pipe(
      retry(3)
    )
 } 
 
}
