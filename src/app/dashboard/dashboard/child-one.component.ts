import { Component} from '@angular/core';
export interface ComplexItem {
    name: string;
    id: string;
    value: number;
}
@Component({
  selector: 'app-child-one',
  template: `
  parent : {{firstItem | json}}
  <div>
    Child:
    <app-child-two [item] = 'firstItem'></app-child-two>
  </div>
  `,
})
export class ChildOneComponent {

  firstItem: ComplexItem = {
    name: "Kiril" ,
    id: "123" ,
    value: 35
  }
  constructor() {
  }
  
}