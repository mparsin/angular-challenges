import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!this.isValidLength(value)){
      return 'Invalid length'
    }
    if (!this.isValidChars(value)){
      return 'Invalid chars'
    }
    return this.formatValue(value)
  }

  private isValidLength(value: string) {
    const visaMasterCardDiscoveryLength = 16;
    const amExLength = 15;
    if (value.length === visaMasterCardDiscoveryLength || value.length === amExLength ) {
      return true;
    }
    return false;
  }

  private isValidChars(value: string) {
    return /^\d+$/.test(value);
  }

  private formatValue(value: string) {
    return `${value.substr(0, 4)}-${value.substr(4, 4)}-${value.substr(8, 4)}-${value.substr(12, 4)}`;
  }
}

