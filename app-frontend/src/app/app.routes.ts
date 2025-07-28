import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Pratos } from './pratos/pratos';
import { Clientes } from './clientes/clientes';
import { Pedidos } from './pedidos/pedidos';
import { RelatorioPratosMaisPedidos } from './relatorio-pratos-mais-pedidos/relatorio-pratos-mais-pedidos';
import { RelatorioClientesMaisPedidosComponent } from  './relatorio-clientes-mais-pedidos/relatorio-clientes-mais-pedidos';
import { RelatorioClientesMaisGastaramComponent } from './relatorio-clientes-mais-gastaram/relatorio-clientes-mais-gastaram';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pratos', component: Pratos },
  { path: 'clientes', component: Clientes },
  { path: 'pedidos', component: Pedidos },
  { path: 'pratos-mais-pedidos', component: RelatorioPratosMaisPedidos },
  { path: 'clientes-mais-pedidos', component: RelatorioClientesMaisPedidosComponent },
  { path: 'clientes-mais-gastaram', component: RelatorioClientesMaisGastaramComponent }
];
