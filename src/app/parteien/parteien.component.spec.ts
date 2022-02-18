import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteienComponent } from './parteien.component';

describe('ParteienComponent', () => {
  let component: ParteienComponent;
  let fixture: ComponentFixture<ParteienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
