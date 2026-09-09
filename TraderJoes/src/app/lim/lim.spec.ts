import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lim } from './lim';

describe('Lim', () => {
  let component: Lim;
  let fixture: ComponentFixture<Lim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lim],
    }).compileComponents();

    fixture = TestBed.createComponent(Lim);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
