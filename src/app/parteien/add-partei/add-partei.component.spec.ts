import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParteiComponent } from './add-partei.component';

describe('AddParteiComponent', () => {
  let component: AddParteiComponent;
  let fixture: ComponentFixture<AddParteiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParteiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParteiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
