import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInsComponent } from './car-ins.component';

describe('CarInsComponent', () => {
  let component: CarInsComponent;
  let fixture: ComponentFixture<CarInsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarInsComponent]
    });
    fixture = TestBed.createComponent(CarInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
