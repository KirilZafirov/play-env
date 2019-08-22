import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

const routes: Routes = [{ path: '', component: SettingsComponent }, 
{ path: 'theme-settings', loadChildren: () => import('app/admin-panel/settings/theme-settings/theme-settings.module').then(m => m.ThemeSettingsModule) }, 
{ path: 'dashboard-settings', loadChildren: () => import('app/admin-panel/settings/dashboard-settings/dashboard-settings.module').then(m => m.DashboardSettingsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
