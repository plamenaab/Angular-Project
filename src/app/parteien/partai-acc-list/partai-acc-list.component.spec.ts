import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartaiAccListComponent } from './partai-acc-list.component';

describe('PartaiAccListComponent', () => {
  let component: PartaiAccListComponent;
  let fixture: ComponentFixture<PartaiAccListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartaiAccListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartaiAccListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
