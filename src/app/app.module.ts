import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app-store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { CadastroGerenteModule } from './cadastro-gerente/cadastro-gerente.module';
import { PipesModule } from './pipes/pipes.module';
import { CadastroAtivoModule } from './cadastro-ativo/cadastro-ativo.module';
import { CadastroClienteModule } from './cadastro-cliente/cadastro-cliente.module';
import { LoginModule } from './login/login.module';

const internalModules = [
  LoginModule,
  CadastroAtivoModule,
  CadastroGerenteModule,
  CadastroClienteModule,
  LayoutModule,
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...internalModules,
    
    BrowserModule,
    PipesModule,
    AppRoutingModule,
    StoreModule.forRoot({app: appReducer}),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
