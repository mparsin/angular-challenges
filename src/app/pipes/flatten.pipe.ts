import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  pure: false
})
export class FlattenPipe implements PipeTransform {

  transform(values: any[], ...args: unknown[]): unknown {
    return this.flattenArray(values);
  }

  private flattenArray(values: any[]): any[] {
    let result: any[] = [];
    values.forEach(m => {
      if (Array.isArray(m)) {
        result.push(...this.flattenArray(m));
      } else {
        result.push(m);
      }
    })
    return result;
  }
}
