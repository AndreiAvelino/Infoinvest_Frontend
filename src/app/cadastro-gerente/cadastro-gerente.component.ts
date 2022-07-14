import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-gerente',
  templateUrl: './cadastro-gerente.component.html',
  styleUrls: ['./cadastro-gerente.component.css']
})
export class CadastroGerenteComponent implements OnInit {

  public titulo = "Lista de gerentes"

  public gerentes = [
    {
      nome: "Andrei",
      email: "andrei-1112@hotmail.com",
      dataNasc: "2022-03-20T15:53:21.125",
    },
    {
      nome: "Maria",
      email: "andrei-1112@hotmail.com",
      dataNasc: "2022-03-20T15:53:21.125",
    },
    {
      nome: "Marcia",
      email: "andrei-1112@hotmail.com",
      dataNasc: "2022-03-20T15:53:21.125",
    },
    {
      nome: "Pedro",
      email: "andrei-1112@hotmail.com",
      dataNasc: "2022-03-20T15:53:21.125",
    }
  ]

  public colunas = [
    {
      valor: "nome",
      visualizacao: "Nome"
    },
    {
      valor: "email",
      visualizacao: "E-mail"
    },
    {
      valor: "dataNasc",
      visualizacao: "Idade"
    }
  ]

  constructor() {
    
  }

  ngOnInit(): void {
    this.gerentes = this.gerentes.map(g =>  {
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
