import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarIncComponent } from './car-inc/car-inc.component';
import { PersonalHealthComponent } from './personal-health/personal-health.component';



@NgModule({
  declarations: [
    CarIncComponent,
    PersonalHealthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HealthModule { }
