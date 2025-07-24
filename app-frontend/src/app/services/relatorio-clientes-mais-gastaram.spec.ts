import { TestBed } from '@angular/core/testing';

import { RelatorioClientesMaisGastaram } from './relatorio-clientes-mais-gastaram';

describe('RelatorioClientesMaisGastaram', () => {
  let service: RelatorioClientesMaisGastaram;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatorioClientesMaisGastaram);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
