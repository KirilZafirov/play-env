import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration : 'enabled' ,
  anchorScrolling: 'enabled',
  scrollOffset: [ 0 , 64 ]
};

const routes: Routes = [
  { path: '', redirectTo: '/dashboard' , pathMatch: 'full'},
  { path: 'dashboard', loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule) },
  { path: 'admin', loadChildren: () => import(`./admin-panel/admin-panel.module`).then(m => m.AdminPanelModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/dashboard' } // catch any unfound routes and redirect to home page
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes , routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
