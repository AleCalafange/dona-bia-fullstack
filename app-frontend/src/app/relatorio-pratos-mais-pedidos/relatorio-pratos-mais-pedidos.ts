import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioPratosMaisPedidosService, PratoRanking } from '../services/relatorio-pratos-mais-pedidos';

@Component({
  selector: 'app-relatorio-pratos-mais-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorio-pratos-mais-pedidos.html',
  styleUrls: ['./relatorio-pratos-mais-pedidos.css']
})
export class RelatorioPratosMaisPedidos implements OnInit {
  ranking: PratoRanking[] = [];

  constructor(private relatorioService: RelatorioPratosMaisPedidosService) {}

  ngOnInit(): void {
    this.relatorioService.listar().subscribe((dados) => {
      this.ranking = dados;
    });
  }
}
