import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent,
  //   children: [
      {
        path: '',
        component:LoginComponent,
        canActivate: [
          MsalGuard
        ]
      },
      {
        path: 'dashboard',
        component:DashboardComponent,
        canActivate: [
          MsalGuard
        ]
      },
      {
        path: 'sperryMet',
        loadChildren: () => import('src/app/sperry-met/sperry-met.module').then(m => m.SperryMetModule)
      }
    
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
