import { Component, OnInit } from '@angular/core';

export interface Shark {
  name: string;
  latinName: string;
  status: string;
}

@Component({
  selector: 'app-client-one',
  templateUrl: './client-one.component.html'
})
export class ClientOneComponent {

  sharks: Shark[] = [
    { name: 'Great White', latinName: 'Carcharodon carcharias', status: 'Vunerable' },
    { name: 'Great hammerhead', latinName: 'Sphyrna mokarran', status: 'Endangered' },
    { name: 'Angular roughshark', latinName: 'Oxynotus centrina', status: 'Vunerable' },
    { name: 'Pyjama', latinName: 'Poroderma africanum', status: 'Near Threatend' }
  ];
  safeSharks = ['Angular roughshark', 'Pyjama']
  selectedShark: Shark = {} as Shark;

  sharkDisplay = (shark: Shark) => {
    return `${shark.name} (${shark.latinName})`;
  }

  getSwimIcon = (shark: Shark) => {
    const icon = this.safeSharks.indexOf(shark.name) >= 0
      ? 'swimmer'
      : 'skull-crossbones';
    return icon;
  }

}