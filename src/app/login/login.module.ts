import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ...materialModules,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class LoginModule { }
