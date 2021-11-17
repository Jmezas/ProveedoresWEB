import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarProveedoresComponent } from './cargar-proveedores.component';

describe('CargarProveedoresComponent', () => {
  let component: CargarProveedoresComponent;
  let fixture: ComponentFixture<CargarProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
