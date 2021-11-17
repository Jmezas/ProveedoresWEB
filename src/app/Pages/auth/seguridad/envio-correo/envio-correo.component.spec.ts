import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioCorreoComponent } from './envio-correo.component';

describe('EnvioCorreoComponent', () => {
  let component: EnvioCorreoComponent;
  let fixture: ComponentFixture<EnvioCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
