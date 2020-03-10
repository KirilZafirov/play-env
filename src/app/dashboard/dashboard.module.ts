import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module'; 
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [DashboardComponent ],
  imports: [
    DashboardRoutingModule ,
    SharedModule,
    CommonModule
  ],
  exports: [ ] , 
})
export class DashboardModule { }
