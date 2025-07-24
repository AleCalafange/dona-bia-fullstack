import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPratosMaisPedidos } from './relatorio-pratos-mais-pedidos';

describe('RelatorioPratosMaisPedidos', () => {
  let component: RelatorioPratosMaisPedidos;
  let fixture: ComponentFixture<RelatorioPratosMaisPedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioPratosMaisPedidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioPratosMaisPedidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
