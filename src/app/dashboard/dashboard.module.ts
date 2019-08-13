import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [DashboardRoutingModule.components],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [ ] ,
  entryComponents:[DashboardRoutingModule.components]
})
export class DashboardModule { }
