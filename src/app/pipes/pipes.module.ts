import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdadePipe } from './idade.pipe';



@NgModule({
  declarations: [IdadePipe],
  imports: [
    CommonModule
  ],
  exports: [
    IdadePipe
  ]
})
export class PipesModule { }
