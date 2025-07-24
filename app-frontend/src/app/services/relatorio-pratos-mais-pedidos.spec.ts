import { TestBed } from '@angular/core/testing';

import { RelatorioPratosMaisPedidos } from './relatorio-pratos-mais-pedidos';

describe('RelatorioPratosMaisPedidos', () => {
  let service: RelatorioPratosMaisPedidos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatorioPratosMaisPedidos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
