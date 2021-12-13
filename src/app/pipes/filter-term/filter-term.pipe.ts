import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm'
})
export class FilterTermPipe implements PipeTransform {

  transform(value: string[], ...args: string[]): string[] {
    console.log('value', value);
    console.log('args', args);
    const result = value.filter(v => v.toLowerCase().indexOf(args[0].toLowerCase()) >= 0 ? v : null);
    console.log('result', result);
    return result;
  }

}
