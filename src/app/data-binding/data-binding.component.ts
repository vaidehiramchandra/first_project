import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  // Data binding in Angular:
  // 1.Interpolation OR String interpolation : 
  // it is one way communication
  // from ts file to template 
  // In which class property bind to the template
  // Before printing it converts to string thats because it is called string intertpolation

  public title:string = "Ram's Angualr App"

  // 2.Attribute binding
  // It is one way communication
  // fromn ts file to template
  // In which class property binds to the template element attribute

 
  public url1:string = "https://www.youtube.com";
  public url2:string = "https://www.google.com";

  public imgSrc:string = "/assets/my-img.jpeg";
  public imgAlt:string = "My Image"

  //3. event binding
  // this is one way communication from template to class
  // in which template event bind to the class method

  public count:number = 0;

  
  increase(){
    if(this.count<5){
      this.count++
    }else{
      alert("Count not be more than 5!")
    }
  }

  decrease(){
     if(this.count>-5){
      this.count--
    
    }else{
      alert("Count notbe less than -5")
    }
  }

  reset(){
    this.count = 0
  }

  // 4.Two way data binding
  // in this there are two way communication from template to class and class to template data is synchronized 
  // in two way daTA BINDING needs a formsModule
  public user:string = ""
  public student:string= ""

  onSubmit(value:string){
    this.student = value
  }

}
