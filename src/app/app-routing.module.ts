import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';


const routes: Routes = [  
  { path: '', component: DashboardComponent , pathMatch: 'full'},
  { path: 'dashboard', loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/dashboard' } // catch any unfound routes and redirect to home page
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
