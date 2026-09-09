import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sabino } from './sabino';

describe('Sabino', () => {
  let component: Sabino;
  let fixture: ComponentFixture<Sabino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabino],
    }).compileComponents();

    fixture = TestBed.createComponent(Sabino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
