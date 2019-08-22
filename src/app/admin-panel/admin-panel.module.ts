import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    AdminPanelRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports : [] ,
  entryComponents:[]
})
export class AdminPanelModule { }
