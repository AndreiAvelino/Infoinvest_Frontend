import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAtivoComponent } from './cadastro-ativo.component';

describe('CadastroAtivoComponent', () => {
  let component: CadastroAtivoComponent;
  let fixture: ComponentFixture<CadastroAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAtivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
