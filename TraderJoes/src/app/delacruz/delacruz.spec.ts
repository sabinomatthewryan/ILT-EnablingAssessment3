import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Delacruz } from './delacruz';

describe('Delacruz', () => {
  let component: Delacruz;
  let fixture: ComponentFixture<Delacruz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Delacruz],
    }).compileComponents();

    fixture = TestBed.createComponent(Delacruz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
