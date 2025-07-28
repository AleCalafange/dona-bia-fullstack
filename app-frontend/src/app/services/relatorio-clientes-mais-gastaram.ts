import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';

export interface ClienteMaisGastaramResponse {
  ClienteId: number;
  totalGasto: number;
  Cliente: {
    nome: string;
  };
}

export interface ClienteGasto {
  nome: string;
  valorTotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class RelatorioClientesMaisGastaramService {
  private apiUrl = `${environment.apiUrl}/relatorios/clientes-mais-gastaram`;

  constructor(private http: HttpClient) {}

listar(): Observable<ClienteGasto[]> {
  return this.http.get<ClienteMaisGastaramResponse[]>(this.apiUrl).pipe(
    map(resposta =>
      resposta
        .filter(item => item.Cliente !== null) // remove os com Cliente nulo
        .map(item => ({
          nome: item.Cliente.nome,
          valorTotal: item.totalGasto
        }))
    )
  );
}
}
