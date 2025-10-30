import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cronometro } from './cronometro';

describe('Cronometro', () => {
  let component: Cronometro;
  let fixture: ComponentFixture<Cronometro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cronometro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cronometro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
