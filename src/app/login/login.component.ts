import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { routes } from 'src/consts';
import { LoginService } from '../services/login.service';
import { IAppStore, inserirToken } from '../store/app-store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup

  constructor(private formBuilder: FormBuilder, 
              private _loginService: LoginService, 
              private _router: Router, 
              private _snackBar: MatSnackBar,
              private store: Store<{app: IAppStore}>) {

    this.formulario = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  public login(){
    this._loginService.login(this.formulario.value)
      .toPromise()
      .then((r: any) => {
        if(r.data){
          this.redirect()
          this.inserirToken(r.data.token)
        } else {
          this._snackBar.open(r.descricao, 'Fechar');
        }
      })
  }

  public redirect(){
    this._router.navigate([`../app`]).then(() => {})
  }

  public inserirToken(token: string): void{
    this.store.dispatch(inserirToken({payload: token}))
  }


}
