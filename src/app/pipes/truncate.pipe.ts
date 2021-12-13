import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    const limit: number = args.length > 0 ? args[0] : 100;
    return `${value.slice(0, limit)}...`;
  }

}
