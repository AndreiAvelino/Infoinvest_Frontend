import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroGerenteComponent } from './cadastro-gerente.component';
import { SharedModule } from '../shared/shared.module';
import {MatInputModule} from '@angular/material/input';

const materialModules = [
  MatInputModule
]

@NgModule({
  declarations: [
    CadastroGerenteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,    
    ...materialModules
  ]
})
export class CadastroGerenteModule { }
