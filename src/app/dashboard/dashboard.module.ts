import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AutocompleteComponent } from '@app/shared/autocomplete/autocomplete/autocomplete.component';
import { SpinnerOverlayComponent } from '@app/shared/components/spinner-overlay/spinner-overlay.component';
import { PopoverComponent } from '@app/shared/components/popover/popover/popover.component';



@NgModule({
  declarations: [DashboardRoutingModule.components],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [ ] ,
  entryComponents:[DashboardRoutingModule.components , AutocompleteComponent, SpinnerOverlayComponent , PopoverComponent]
})
export class DashboardModule { }
