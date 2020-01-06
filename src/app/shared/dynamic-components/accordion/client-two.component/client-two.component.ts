import {Component, EventEmitter, forwardRef} from '@angular/core';
import {AccordionItem} from '../accordion.model';
import {ACCORDION_ITEM} from '../accordion.tokens';

@Component({
  selector: 'app-accordion-item2',
  template: `
    <div class="accordion-item" [class.open]="isOpen">
      <label class="accordion-item-label" (click)="itemToggled.emit()" appAccordionHeader>
        Accordion Item 2.
      </label>
      <div class="accordion-item-content" appAccordionContent>
        Accordion Item 2 Content.
      </div> 
    </div>
  `,
  styleUrls: ['./accordion-two.component.scss'],
  providers: [{provide: ACCORDION_ITEM, useExisting: forwardRef(() => AccordionItem2Component)}]
})
export class AccordionItem2Component implements AccordionItem {

  public isOpen: boolean;
  public itemToggled = new EventEmitter<number>();

}
