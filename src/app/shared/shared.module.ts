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
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { SpinnerOverlayServiceService } from './components/spinner-overlay/spinner-overlay-service.service';
import { PopoverComponent } from './components/popover/popover/popover.component';
import { PopoverService } from './components/popover/popover.service';
import { InsidePopoverComponent } from './components/popover/inside-popover/inside-popover.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { CounterViewComponent } from './components/countdown-timer/counter-view/counter-view/counter-view.component';
import { InputToValuePipe } from './components/countdown-timer/input-to-value.pipe';
import { CounterFacadeService } from './components/countdown-timer/counter-facade-interface';
import { ToClockDisplayPipe } from './components/countdown-timer/clock.pipe';
import { TemperatureConverterComponent } from './components/temperature-convertor/temperature-convertor.component';
import { ExampleDynamicComponent } from './components/dynamic-components/example-dynamic/example-dynamic.component';

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
    ReactiveFormsModule ,
    MaterialModule
  ],
  declarations: [
    publicAutocompleteApi ,
    InputToValuePipe ,
    FilterPipe,
    ToClockDisplayPipe,
    SpinnerComponent ,
    SpinnerOverlayComponent,
    PopoverComponent,
    InsidePopoverComponent,
    CountdownTimerComponent ,
    CounterViewComponent ,
    TemperatureConverterComponent,
    ExampleDynamicComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule ,
    publicAutocompleteApi,
    FilterPipe,
    SpinnerComponent ,
    SpinnerOverlayComponent ,
    PopoverComponent, InsidePopoverComponent , CountdownTimerComponent , CounterViewComponent ,
    InputToValuePipe ,
    ToClockDisplayPipe ,
    TemperatureConverterComponent,
    ExampleDynamicComponent
  ],
  providers: [SpinnerOverlayServiceService , PopoverService , CounterFacadeService],
  entryComponents: []
})
export class SharedModule {}
