import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent implements OnInit {

  private _ccNumber: string = '';
  @Input()
  get ccNumber(): string{
    if (this.isReadOnly) {
      return 'xxxx-xxxx-xxxx' + this._ccNumber.substr(12)
    }
    return this._ccNumber
  }
  set ccNumber(value: string){
    this._ccNumber = value;
  }
  @Input() isReadOnly: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
