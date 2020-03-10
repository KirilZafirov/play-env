import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OptionComponent } from './autocomplete/option/option.component';
import { AutocompleteContentDirective } from './autocomplete/autocomplete-content.directive';
import { AutocompleteDirective } from './autocomplete/autocomplete.directive';
import { AutocompleteComponent } from './autocomplete/autocomplete/autocomplete.component'; 
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { SpinnerOverlayServiceService } from './components/spinner-overlay/spinner-overlay-service.service';
import { PopoverComponent } from './components/popover/popover/popover.component';
import { PopoverService } from './components/popover/popover.service';
import { InsidePopoverComponent } from './components/popover/inside-popover/inside-popover.component';

const publicAutocompleteApi = [
  AutocompleteComponent,
  AutocompleteDirective,
  AutocompleteContentDirective,
  OptionComponent
];

export const declarations = [
  publicAutocompleteApi ,
  SpinnerComponent ,
  SpinnerOverlayComponent,
  PopoverComponent,
  InsidePopoverComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    MaterialModule
  ],
  declarations: [...declarations],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule ,  
    declarations
  ],
  providers: [SpinnerOverlayServiceService , PopoverService ],
  entryComponents: []
})
export class SharedModule {}
