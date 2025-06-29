import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeInsComponent } from './bike-ins.component';

describe('BikeInsComponent', () => {
  let component: BikeInsComponent;
  let fixture: ComponentFixture<BikeInsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikeInsComponent]
    });
    fixture = TestBed.createComponent(BikeInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
