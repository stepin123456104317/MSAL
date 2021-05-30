import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestOneComponent } from './test-one/test-one.component';
import { mdRoutingModule } from './md-routing.module';



@NgModule({
  declarations: [
    TestOneComponent
  ],
  imports: [
    CommonModule,
    mdRoutingModule
  ]
})
export class mdModule { 
  constructor(){
    console.log("Lazy loaded: ");
  }
}
