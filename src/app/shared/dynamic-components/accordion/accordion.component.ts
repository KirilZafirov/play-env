import {Component, AfterContentInit, ContentChildren} from '@angular/core';
import {AccordionItem, AccordionWrapper} from './accordion.model';
import {ACCORDION_ITEM} from './accordion.tokens';

@Component({
  selector: 'app-accordion',
  template: `<ul class="accordion-container">
                <ng-content></ng-content>
            </ul>
  `,
})
export class AccordionComponent implements AfterContentInit, AccordionWrapper {

  private activeIndex: number;
  @ContentChildren(ACCORDION_ITEM as any) items: AccordionItem[];

  public ngAfterContentInit(): void {
    this.items.forEach((item: AccordionItem, index) => {
      item.itemToggled.subscribe(() => this.itemToggledHandler(index));
    });
  }

  public itemToggledHandler(i: number) {
    this.activeIndex = this.activeIndex === i ? null : i;
    this.items.forEach((item: AccordionItem, index) => {
      item.isOpen = index === this.activeIndex;
    });
  }
}
