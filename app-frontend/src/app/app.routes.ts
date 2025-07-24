import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Pratos } from './pratos/pratos';
import { Clientes } from './clientes/clientes';
import { Pedidos } from './pedidos/pedidos';
import { RelatorioPratosMaisPedidos } from './relatorio-pratos-mais-pedidos/relatorio-pratos-mais-pedidos';
import { RelatorioClientesMaisPedidos } from './relatorio-clientes-mais-pedidos/relatorio-clientes-mais-pedidos';
import { RelatorioClientesMaisGastaram } from './relatorio-clientes-mais-gastaram/relatorio-clientes-mais-gastaram';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pratos', component: Pratos },
  { path: 'clientes', component: Clientes },
  { path: 'pedidos', component: Pedidos },
  { path: 'relatorios/pratos-mais-pedidos', component: RelatorioPratosMaisPedidos },
  { path: 'relatorios/clientes-mais-pedidos', component: RelatorioClientesMaisPedidos },
  { path: 'relatorios/clientes-mais-gastaram', component: RelatorioClientesMaisGastaram }
];
