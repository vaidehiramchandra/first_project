import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { BuiltInComponent } from './directives/built-in/built-in.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/custom/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    BuiltInComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
