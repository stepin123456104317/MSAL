import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestOneComponent } from './test-one/test-one.component';

const routes: Routes = [
  {
    path: 'one',
    component: TestOneComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class mdRoutingModule { }
