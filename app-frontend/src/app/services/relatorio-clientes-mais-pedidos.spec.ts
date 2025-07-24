import { TestBed } from '@angular/core/testing';

import { RelatorioClientesMaisPedidos } from './relatorio-clientes-mais-pedidos';

describe('RelatorioClientesMaisPedidos', () => {
  let service: RelatorioClientesMaisPedidos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatorioClientesMaisPedidos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
