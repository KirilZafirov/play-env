import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'inputToValue'
})

export class InputToValuePipe implements PipeTransform {

    getInputValue = (event): number => {
        return parseInt(event['target'].value, 10 );
    }

    transform(value: any, ...args: any[]): any {
        return value !== null ? this.getInputValue(value): null;
    }
}