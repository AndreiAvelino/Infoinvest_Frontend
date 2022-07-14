import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAtivoComponent } from './cadastro-ativo.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule
]


@NgModule({
  declarations: [CadastroAtivoComponent],
  imports: [
    ...materialModules,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CadastroAtivoModule { }
