import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardSettingsComponent } from './dashboard-settings.component';

const routes: Routes = [{ path: '', component: DashboardSettingsComponent , data: { title: 'Dashboard Settings'}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardSettingsRoutingModule { }
