import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDefualtComponent } from './cadastro-defualt.component';

describe('CadastroDefualtComponent', () => {
  let component: CadastroDefualtComponent;
  let fixture: ComponentFixture<CadastroDefualtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDefualtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDefualtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
