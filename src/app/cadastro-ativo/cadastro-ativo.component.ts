import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-ativo',
  templateUrl: './cadastro-ativo.component.html',
  styleUrls: ['./cadastro-ativo.component.css']
})
export class CadastroAtivoComponent implements OnInit {

  public registros = [
    {
      descricao: "Ethereum",
      classificacaoAtivo: "Cripto"
    },
    {
      descricao: "Bitcoin",
      classificacaoAtivo: "Cripto"
    },
    {
      descricao: "PETR4",
      classificacaoAtivo: "Acao"
    },
    {
      descricao: "Petroleo",
      classificacaoAtivo: "Commodity"
    },
  ]

  public colunas = [
    {
      valor: "descricao",
      visualizacao: "Descrição"
    },
    {
      valor: "classificacaoAtivo",
      visualizacao: "Classificação"
    },
  ]


  public classificacoes = [
    {
      id: "0",
      descricao: "Criptomoeda"
    },
    {
      id: "1",
      descricao: "Renda fixa"
    },
    {
      id: "2",
      descricao: "Algo"
    },
    {
      id: "3",
      descricao: "Lucro"
    },
    {
      id: "4",
      descricao: "Ativo"
    }
  ]

  public formulario: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      descricao: ["", Validators.required],
      cotacao: [0, Validators.required],
      idClassificacaoAtivo: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  public post(){
    
  }

}
