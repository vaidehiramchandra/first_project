import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaternityHealthComponent } from './maternity-health.component';

describe('MaternityHealthComponent', () => {
  let component: MaternityHealthComponent;
  let fixture: ComponentFixture<MaternityHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaternityHealthComponent]
    });
    fixture = TestBed.createComponent(MaternityHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
