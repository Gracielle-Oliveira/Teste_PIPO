import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { DataTable, RespDados } from '../shared/data.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor( private http: HttpClient) { }

  url: string = 'http://localhost:3000/';

  getListar(): Observable<RespDados[]> {
  	return this.http.get<RespDados[]>(this.url + 'dados');
  }

  salvarDados(dados: DataTable): Observable<any> {
    return this.http.post(this.url + 'dados', dados)
  }

  delete(id: string): Observable<any> {
    const _url = `${this.url}/${id}`;
    return this.http.delete<any>(_url)
  }
 
}
