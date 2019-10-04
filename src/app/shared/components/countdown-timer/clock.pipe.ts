
const timerDisplayFormatter = ms =>
`${Math.floor(ms / 60)}:${(ms % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toClockDisplay'
})
export class ToClockDisplayPipe implements PipeTransform {

  transform(value: any): any {
    return value !== null && value !== undefined ? 
    `${Math.floor(value / 60)}:${(value % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}` : 0;
  }

}
