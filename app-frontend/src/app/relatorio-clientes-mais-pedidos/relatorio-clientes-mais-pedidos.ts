import { Component, OnInit,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioClientesMaisPedidosService, ClienteRanking } from '../services/relatorio-clientes-mais-pedidos';

@Component({
  selector: 'app-relatorio-clientes-mais-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorio-clientes-mais-pedidos.html',
  styleUrls: ['./relatorio-clientes-mais-pedidos.css']
})
export class RelatorioClientesMaisPedidos implements OnInit{
  ranking: ClienteRanking[] = [];

  constructor(private relatorioService: RelatorioClientesMaisPedidosService) {}

  ngOnInit(): void {
    this.relatorioService.listar().subscribe((dados) => {
      this.ranking = dados;
    });
  }
}
