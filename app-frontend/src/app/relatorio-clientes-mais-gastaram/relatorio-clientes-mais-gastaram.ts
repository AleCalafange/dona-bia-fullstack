import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioClientesMaisGastaramService, ClienteGasto } from '../services/relatorio-clientes-mais-gastaram';

@Component({
  selector: 'app-relatorio-clientes-mais-gastaram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorio-clientes-mais-gastaram.html',
  styleUrls: ['./relatorio-clientes-mais-gastaram.css']
})
export class RelatorioClientesMaisGastaram implements OnInit {
  ranking: ClienteGasto[] = [];

  constructor(private relatorioService: RelatorioClientesMaisGastaramService) {}

  ngOnInit(): void {
    this.relatorioService.listar().subscribe((dados) => {
      this.ranking = dados;
    });
  }

}
