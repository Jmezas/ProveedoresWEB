import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevicionComponent } from './revicion.component';

describe('RevicionComponent', () => {
  let component: RevicionComponent;
  let fixture: ComponentFixture<RevicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
