import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cliente } from '../models/cliente';
import { Response } from '../models/response';

const httpOptions = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = 'http://localhost:14408/api/cliente/';

  constructor(
    private _http: HttpClient
  ) { }

  getClientes(): Observable<Response>{
      return this._http.get<Response>(this.url);
  }

  addClientes(cliente: cliente): Observable<Response>{
    return this._http.post<Response>(this.url, cliente, httpOptions);
  }

}
