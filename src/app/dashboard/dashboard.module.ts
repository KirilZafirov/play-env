import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AutocompleteComponent } from '@app/shared/autocomplete/autocomplete/autocomplete.component';
import { SpinnerOverlayComponent } from '@app/shared/components/spinner-overlay/spinner-overlay.component';
import { PopoverComponent } from '@app/shared/components/popover/popover/popover.component';
import { InsidePopoverComponent } from '@app/shared/components/popover/inside-popover/inside-popover.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule ,
    SharedModule,
    CommonModule
  ],
  exports: [ ] ,
  entryComponents:[ AutocompleteComponent, SpinnerOverlayComponent , PopoverComponent , InsidePopoverComponent]
})
export class DashboardModule { }
