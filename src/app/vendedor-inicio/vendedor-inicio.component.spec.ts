import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorInicioComponent } from './vendedor-inicio.component';

describe('VendedorInicioComponent', () => {
  let component: VendedorInicioComponent;
  let fixture: ComponentFixture<VendedorInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendedorInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendedorInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
