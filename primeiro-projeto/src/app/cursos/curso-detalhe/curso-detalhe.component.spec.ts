import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalheComponent } from './curso-detalhe.component';

describe('CusoDetalheComponent', () => {
  let component: CursoDetalheComponent;
  let fixture: ComponentFixture<CursoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
