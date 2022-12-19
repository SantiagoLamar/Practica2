import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './componentes/component/component.component';
import { Component1Component } from './componentes/component1/component1.component';

const routes: Routes = [

  { path : '', component: ComponentComponent},
  { path : 'home', component: Component1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
