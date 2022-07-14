import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-defualt',
  templateUrl: './cadastro-defualt.component.html',
  styleUrls: ['./cadastro-defualt.component.css']
})
export class CadastroDefualtComponent implements OnInit, AfterContentInit {

  @Input('role') role;
  @Input('titulo') titulo

  public formulario: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nome: ["", Validators.required],
      dataNasc: [null, Validators.required],
      role: 0,
      password: "default",
      email: ["", Validators.required]
    })
  }

  ngAfterContentInit(): void {
    this.formulario.patchValue({
      role: this.role
    })
  }

  public emitClickSalvar(event){
    
  }

  ngOnInit(): void {
  }

}
