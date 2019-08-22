import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './settings/settings.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    AdminPanelRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports : [] ,
  entryComponents:[]
})
export class AdminPanelModule { }
