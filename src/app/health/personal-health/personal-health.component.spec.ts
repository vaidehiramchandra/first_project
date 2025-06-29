import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalHealthComponent } from './personal-health.component';

describe('PersonalHealthComponent', () => {
  let component: PersonalHealthComponent;
  let fixture: ComponentFixture<PersonalHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalHealthComponent]
    });
    fixture = TestBed.createComponent(PersonalHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
