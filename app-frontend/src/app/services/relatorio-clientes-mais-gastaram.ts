import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface ClienteGasto {
  cpf: string;
  nome: string;
  totalGasto: number;
}

@Injectable({
  providedIn: 'root'
})
export class RelatorioClientesMaisGastaramService {
  private apiUrl = `${environment.apiUrl}/relatorios/clientes-mais-gastaram`;

  constructor(private http: HttpClient) {}

  listar(): Observable<ClienteGasto[]> {
    return this.http.get<ClienteGasto[]>(this.apiUrl);
  }
}
