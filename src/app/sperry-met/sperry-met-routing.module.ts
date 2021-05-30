import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestTwoComponent } from './test-two/test-two.component';

const routes: Routes = [
  {
    path: 'two',
    component: TestTwoComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SperryMetRoutingModule { }
