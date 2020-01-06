import {EventEmitter, InjectionToken} from '@angular/core';

export interface AccordionWrapper {
  items: AccordionItem[];
}

export interface AccordionItem {
  itemToggled: EventEmitter<number>;
  isOpen: boolean;
}

// export const ACCORDION_ITEM = new InjectionToken<AccordionItem>('AccordionItem');
