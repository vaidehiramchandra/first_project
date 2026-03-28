import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { BuiltInComponent } from './directives/built-in/built-in.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/custom/highlight.directive';
import { LoginComponent } from './login/login.component';
import { DataBindingComponent } from './data-binding/data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    ComponentComponent,
    BuiltInComponent,
    HighlightDirective,
    LoginComponent,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
