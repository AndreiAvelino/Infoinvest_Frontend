import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CardDefaultComponent } from './card-default/card-default.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { TableDefaultComponent } from './table-default/table-default.component';
import { CadastroDefualtComponent } from './cadastro-defualt/cadastro-defualt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from '../pipes/pipes.module';


const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule
]

@NgModule({
  declarations: [
    CardDefaultComponent,
    TableDefaultComponent,
    CadastroDefualtComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  exports:[
    CardDefaultComponent,
    TableDefaultComponent,
    CadastroDefualtComponent
  ]
})
export class SharedModule { }
