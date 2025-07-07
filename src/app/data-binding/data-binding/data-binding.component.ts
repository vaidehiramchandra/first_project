import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  // 1.Interpolation

  public name:string = "Ram"

  private password:any = 1233

  // 2.Property Binding
  public pathUrl = "www.facebook.com"
  
}
