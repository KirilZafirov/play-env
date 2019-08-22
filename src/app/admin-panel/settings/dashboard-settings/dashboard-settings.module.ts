import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardSettingsRoutingModule } from './dashboard-settings-routing.module';
import { DashboardSettingsComponent } from './dashboard-settings.component';


@NgModule({
  declarations: [DashboardSettingsComponent],
  imports: [
    CommonModule,
    DashboardSettingsRoutingModule
  ]
})
export class DashboardSettingsModule { }
