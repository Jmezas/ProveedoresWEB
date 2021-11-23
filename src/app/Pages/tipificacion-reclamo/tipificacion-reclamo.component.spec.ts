import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipificacionReclamoComponent } from './tipificacion-reclamo.component';

describe('TipificacionReclamoComponent', () => {
  let component: TipificacionReclamoComponent;
  let fixture: ComponentFixture<TipificacionReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipificacionReclamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipificacionReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
