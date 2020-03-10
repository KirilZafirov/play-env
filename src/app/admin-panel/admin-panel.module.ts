import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminComponent } from './admin/admin.component';
import { TestAdminComponent } from './admin/test-admin/test-admin.component';
import { TestNgZoneComponent } from './admin/test-ng-zone/test-ng-zone.component';
import { WebWorkerExampleComponent } from './admin/web-worker-example/web-worker-example.component';



@NgModule({
  declarations: [AdminComponent, TestAdminComponent, TestNgZoneComponent, WebWorkerExampleComponent],
  imports: [
    AdminPanelRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports : [] ,
  // entryComponents:[]
})
export class AdminPanelModule { }
