import { Component, OnInit } from '@angular/core';
import { PedidoService, Pedido, PedidoInput } from '../services/pedido';
import { PratoService, Prato } from '../services/prato';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedidos.html',
  styleUrls: ['./pedidos.css']
})
export class Pedidos implements OnInit {
  novoPedido: PedidoInput = { cpf: '', pratoId: 0 };
  pedidos: Pedido[] = [];
  pratos: Prato[] = [];

  pedidosVisiveis: boolean = false;
  editandoPedidoId: number | null = null;
  pedidoEditando: Pedido = { id: 0, cpf: '', pratoId: 0};


  constructor(
    private pedidoService: PedidoService,
    private pratoService: PratoService
  ) {}

  ngOnInit(): void {
    this.carregarPratos();
  }

  carregarPratos(): void {
    this.pratoService.listar().subscribe((dados) => {
      this.pratos = dados;
    });
  }


  carregarPedidos(): void {
    this.pedidoService.listar().subscribe((dados) => {
      this.pedidos = dados;
      this.pedidosVisiveis = true;
    });
  }

  criarPedido(): void {
    this.pedidoService.criar(this.novoPedido).subscribe(() => {
      alert('Pedido realizado com sucesso!');
      this.novoPedido = { cpf: '', pratoId: 0 };
      if (this.pedidosVisiveis) this.carregarPedidos();
    });
  }

editarPedido(pedido: Pedido): void {
    this.editandoPedidoId = pedido.id!;
    this.pedidoEditando = { ...pedido }; // cópia para edição
  }

  atualizarPedido(): void {
    if (this.pedidoEditando.id != null) {
      this.pedidoService.atualizar(this.pedidoEditando.id, this.pedidoEditando).subscribe(() => {
        this.editandoPedidoId = null;
        this.carregarPedidos();
      });
    }
  }

    excluirPedido(id: number): void {
    if (confirm('Tem certeza que deseja excluir este pedido?')) {
      this.pedidoService.excluir(id).subscribe(() => {
        this.carregarPedidos();
      });
    }
  }

  exibirNomeDoPrato(id: number): string {
    const prato = this.pratos.find(p => p.id === id);
    return prato ? prato.nome : 'Prato desconhecido';
  }
}
