import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OptionComponent } from './autocomplete/option/option.component';
import { AutocompleteContentDirective } from './autocomplete/autocomplete-content.directive';
import { AutocompleteDirective } from './autocomplete/autocomplete.directive';
import { AutocompleteComponent } from './autocomplete/autocomplete/autocomplete.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { SpinnerOverlayServiceService } from './services/spinner-overlay-service.service';

const publicAutocompleteApi = [
  AutocompleteComponent,
  AutocompleteDirective,
  AutocompleteContentDirective,
  OptionComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    publicAutocompleteApi ,
    
  FilterPipe,
    
  SpinnerComponent , 
  SpinnerOverlayComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule , 
    publicAutocompleteApi,
    FilterPipe,
    SpinnerComponent , 
    SpinnerOverlayComponent
  ],
  providers: [SpinnerOverlayServiceService],
  entryComponents:[]
})
export class SharedModule {}
