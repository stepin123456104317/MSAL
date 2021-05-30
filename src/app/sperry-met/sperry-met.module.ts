import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestTwoComponent } from './test-two/test-two.component';
import { SperryMetRoutingModule } from './sperry-met-routing.module';



@NgModule({
  declarations: [
    TestTwoComponent
  ],
  imports: [
    CommonModule,
    SperryMetRoutingModule
  ]
})
export class SperryMetModule { }
