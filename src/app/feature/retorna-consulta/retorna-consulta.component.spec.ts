import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornaConsultaComponent } from './retorna-consulta.component';

describe('RetornaConsultaComponent', () => {
  let component: RetornaConsultaComponent;
  let fixture: ComponentFixture<RetornaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetornaConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetornaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
