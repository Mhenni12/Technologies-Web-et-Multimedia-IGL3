import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sccore } from './sccore';

describe('Sccore', () => {
  let component: Sccore;
  let fixture: ComponentFixture<Sccore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sccore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sccore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
