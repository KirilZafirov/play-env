import { InjectionToken } from '@angular/core';
import { AccordionItem } from './accordion.model';

export const ACCORDION_ITEM = new InjectionToken<AccordionItem>('AccordionItem');
