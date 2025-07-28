// relatorio-clientes-mais-pedidos.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioClientesMaisPedidosService, ClientePedidos } from '../services/relatorio-clientes-mais-pedidos';

@Component({
  selector: 'app-relatorio-clientes-mais-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorio-clientes-mais-pedidos.html',
  styleUrls: ['./relatorio-clientes-mais-pedidos.css']
})
export class RelatorioClientesMaisPedidosComponent implements OnInit {
  ranking: ClientePedidos[] = [];

  constructor(private relatorioService: RelatorioClientesMaisPedidosService) {}

  ngOnInit(): void {
    this.relatorioService.listar().subscribe(dados => {
      this.ranking = dados
        .filter(item => item.Cliente !== null)
        .map(item => ({
          nome: item.Cliente.nome,
          quantidadePedidos: item.quantidadePedidos
        }));
    });
  }
}
