import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardSettingsComponent } from './dashboard-settings.component';

const routes: Routes = [{ path: '', component: DashboardSettingsComponent ,
data: { 
  title: 'Dashboard Settings',
  breadcrumb: [
  {
  label: 'Admin Section',
  url: '/admin'
  },
  {
  label: 'Settings',
  url: '/admin/settings'
  },
  {
    label: 'Dashboard Settings',
    url: '/admin/settings/theme-settings'
    }
  ]
}


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardSettingsRoutingModule { }
