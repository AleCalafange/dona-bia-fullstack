import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioClientesMaisGastaram } from './relatorio-clientes-mais-gastaram';

describe('RelatorioClientesMaisGastaram', () => {
  let component: RelatorioClientesMaisGastaram;
  let fixture: ComponentFixture<RelatorioClientesMaisGastaram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioClientesMaisGastaram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioClientesMaisGastaram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
