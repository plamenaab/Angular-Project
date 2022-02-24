import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHintComponent } from './show-hint.component';

describe('ShowHintComponent', () => {
  let component: ShowHintComponent;
  let fixture: ComponentFixture<ShowHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
