import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './componentes/component/component.component';
import { Component1Component } from './componentes/component1/component1.component';
import { Component2Component } from './componentes/component2/component2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
