import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  public titulo = "Lista de clientes"

  public clientes = [
    {
      nome: "Andrei",
      dataNasc: "1996-03-20T15:53:21.125",
      saldo: 1054,
    },
    {
      nome: "Jóse",
      dataNasc: "1980-03-20T15:53:21.125",
      saldo: 1054,
    },
    {
      nome: "Leonardo",
      dataNasc: "1996-03-20T15:53:21.125",
      saldo: 1054,
    },
    {
      nome: "Parick",
      dataNasc: "2000-03-20T15:53:21.125",
      saldo: 1054,
    },
    {
      nome: "Patricia",
      dataNasc: "2022-03-20T15:53:21.125",
      saldo: 1054,
    },
  ]

  public colunas = [
    {
      valor: "nome",
      visualizacao: "Nome"
    },
    {
      valor: "dataNasc",
      visualizacao: "Idade"
    },
    {
      valor: "saldo",
      visualizacao: "Saldo"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.clientes = this.clientes.map(g =>  {
      return {
        ...g,
        dataNasc: String(this.insereIdade(g.dataNasc))
      }
    })
  }

  public insereIdade(data){
    return Math.abs(new Date().getFullYear() - parseInt(data.slice(0, 4)))
  }

}
