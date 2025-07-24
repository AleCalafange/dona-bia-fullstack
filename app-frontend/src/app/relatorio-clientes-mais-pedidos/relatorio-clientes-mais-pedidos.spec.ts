import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioClientesMaisPedidos } from './relatorio-clientes-mais-pedidos';

describe('RelatorioClientesMaisPedidos', () => {
  let component: RelatorioClientesMaisPedidos;
  let fixture: ComponentFixture<RelatorioClientesMaisPedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioClientesMaisPedidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioClientesMaisPedidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
