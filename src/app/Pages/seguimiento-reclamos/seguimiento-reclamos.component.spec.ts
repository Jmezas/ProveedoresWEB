import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoReclamosComponent } from './seguimiento-reclamos.component';

describe('SeguimientoReclamosComponent', () => {
  let component: SeguimientoReclamosComponent;
  let fixture: ComponentFixture<SeguimientoReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoReclamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
