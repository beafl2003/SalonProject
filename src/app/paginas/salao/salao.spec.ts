import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Salao } from './salao';

describe('Salao', () => {
  let component: Salao;
  let fixture: ComponentFixture<Salao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salao],
    }).compileComponents();

    fixture = TestBed.createComponent(Salao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
