import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.css']
})
export class BuiltInComponent {

  // directives : directives in angular are responsibvle for change the structure or change the behavoiur of the template
  // directives chnage structire by adding or removing elements from dom and change behavuiur by changing style of the dom element
  // there are main two types of directives
  // 1.Built in : Angular provides itself 
  // 2.Custom directives : Developer can create itself 

  // In built in derective again three types 
  // i.structural : structural derective change the structure of template by add or remove elelment
  // There are three types of structural directives

  // a.*ngIf : it hiode or show template base don boolean condition
  public isLogin:boolean = false;

  login(){
    this.isLogin = !this.isLogin

  }

  // b.*ngFor: it repeats the template for the item of collection
  public students:any[] = ["Rohan", "Ranav", "Priti", "Sayli"];

  // c.*ngSwitch : It return the case with matching value
  public color:string = "purple"

  // ii.attribute : Attribute serectives can change behaviur of element by dyamic changing its style
  // there are three types of attribute directives

  // a.ngStyle= It changes inline style dynamically;

  // b.ngClass= It change class dynamically based on condition

  // c.ngModel : it changes form inputs on user reaction  needs forms module 
 public user:string = ""


  // iii.component : Componet its itselt a directive with its own tem[plate and style



}
