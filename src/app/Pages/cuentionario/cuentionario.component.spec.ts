import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentionarioComponent } from './cuentionario.component';

describe('CuentionarioComponent', () => {
  let component: CuentionarioComponent;
  let fixture: ComponentFixture<CuentionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
