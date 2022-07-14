import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-default',
  templateUrl: './table-default.component.html',
  styleUrls: ['./table-default.component.css']
})
export class TableDefaultComponent implements OnInit, AfterContentInit {

  @Input('colunas') colunas
  @Input('registros') registros 
  @Input('titulo') titulo

  constructor() { }
  ngAfterContentInit(): void {
    console.log(this.colunas)
  }

  ngOnInit(): void {
  }

  public retornaColunas(){
    return this.colunas.map(v => v.valor)
  } 

}
