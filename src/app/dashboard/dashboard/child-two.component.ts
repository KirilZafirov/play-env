import { Component, Input} from '@angular/core';
import { ComplexItem } from './child-one.component';
@Component({
  selector: 'app-child-two',
  template: `
   {{item | json}}
  `,
})

export class ChildTwoComponent {

  @Input() item: ComplexItem;

  constructor() {
  }
  ngOnInit() {
    this.item.value = 60;
  }
}