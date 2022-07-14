import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAtivoComponent } from './cadastro-ativo/cadastro-ativo.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroGerenteComponent } from './cadastro-gerente/cadastro-gerente.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [  
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'cadastro-gerente',
        component: CadastroGerenteComponent
      },
      {
        path: 'cadastro-ativo',
        component: CadastroAtivoComponent
      },
      {
        path: 'cadastro-cliente',
        component: CadastroClienteComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
