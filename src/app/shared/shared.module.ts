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
    
  SpinnerComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule , 
    publicAutocompleteApi,
    FilterPipe,
    SpinnerComponent
  ],
  providers: [],
})
export class SharedModule {}
