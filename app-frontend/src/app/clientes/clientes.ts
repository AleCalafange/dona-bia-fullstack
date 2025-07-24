import { Component, OnInit } from '@angular/core';
import { ClienteService, Cliente } from '../services/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.html',
  styleUrls: ['./clientes.css']
})
export class Clientes implements OnInit {
  clientes: Cliente[] = [];
  novoCliente: Cliente = { nome: '', cpf: '' };
  editandoClienteId: number | null = null;
  clientesVisiveis: boolean = false;


  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    //this.carregarClientes(); 
  }

carregarClientes(): void {
  this.clienteService.listar().subscribe((dados) => {
    this.clientes = dados;
    this.clientesVisiveis = true;
  });
}


  salvarCliente(): void {
    if (this.editandoClienteId) {
      // Atualizar cliente
      this.clienteService.atualizar(this.editandoClienteId, this.novoCliente).subscribe(() => {
        this.limparFormulario();
        this.carregarClientes();
      });
    } else {
      // Criar novo cliente
      this.clienteService.criar(this.novoCliente).subscribe(() => {
        this.limparFormulario();
        this.carregarClientes();
      });
    }
  }

  editarCliente(cliente: Cliente): void {
    this.novoCliente = { ...cliente }; // copia os dados para o formulário
    this.editandoClienteId = cliente.id || null;
  }

  excluirCliente(id: number): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.clienteService.excluir(id).subscribe(() => {
        this.carregarClientes();
      });
    }
  }

  limparFormulario(): void {
    this.novoCliente = { nome: '', cpf: '' };
    this.editandoClienteId = null;
  }
}