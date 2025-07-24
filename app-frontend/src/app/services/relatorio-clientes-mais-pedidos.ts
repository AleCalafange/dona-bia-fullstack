import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface ClienteRanking {
  cpf: string;
  nome: string;
  totalPedidos: number;
}

@Injectable({
  providedIn: 'root'
})
export class RelatorioClientesMaisPedidosService {
  private apiUrl = `${environment.apiUrl}/relatorios/clientes-mais-pedidos`;

  constructor(private http: HttpClient) {}

  listar(): Observable<ClienteRanking[]> {
    return this.http.get<ClienteRanking[]>(this.apiUrl);
  }
  
}
