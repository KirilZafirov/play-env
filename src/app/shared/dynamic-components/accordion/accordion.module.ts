import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {AccordionComponent} from './accordion.component'; 
import { AccordionItemComponent } from './client-one.component/client-one.component';
import { AccordionItem2Component } from './client-two.component/client-two.component';
import { AccordionContentDirective } from './directives/accordion-content.directive';
import { AccordionHeaderDirective } from './directives/accordion-header.directive';

export const declarations = [
    AccordionItemComponent,
    AccordionItem2Component,
    AccordionContentDirective,
    AccordionHeaderDirective,
    AccordionComponent];

@NgModule({
  declarations: [...declarations],
  exports: declarations,
  imports: [
    CommonModule
  ]
})
export class AccordionModule { }
