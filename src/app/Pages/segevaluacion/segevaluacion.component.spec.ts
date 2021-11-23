import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegevaluacionComponent } from './segevaluacion.component';

describe('SegevaluacionComponent', () => {
  let component: SegevaluacionComponent;
  let fixture: ComponentFixture<SegevaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegevaluacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegevaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
