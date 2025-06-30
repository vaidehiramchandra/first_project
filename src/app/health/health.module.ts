import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarIncComponent } from './car-inc/car-inc.component';
import { PersonalHealthComponent } from './personal-health/personal-health.component';
import { FamilyPlanComponent } from './family-plan/family-plan.component';
import { MaternityHealthComponent } from './maternity-health/maternity-health.component';



@NgModule({
  declarations: [
    CarIncComponent,
    PersonalHealthComponent,
    FamilyPlanComponent,
    MaternityHealthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HealthModule { }
