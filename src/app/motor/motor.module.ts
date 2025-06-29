import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInsComponent } from './car-ins/car-ins.component';
import { BikeInsComponent } from './bike-ins/bike-ins.component';



@NgModule({
  declarations: [
    CarInsComponent,
    BikeInsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MotorModule { }
