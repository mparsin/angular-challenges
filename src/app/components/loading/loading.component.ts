import {Component, Input, OnInit} from '@angular/core';
import {LoadingTypeEnum} from "./model/loading-type.enum";
import {interval, Subscription} from "rxjs";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  private _isLoading = false;
  @Input() get isLoading(): boolean {
    return this._isLoading;
  }

  private intervalSubscription: Subscription | null = null;

  set isLoading(value: boolean) {
    this._isLoading = value;
    if (this._isLoading && this.loadingType === LoadingTypeEnum.Text) {
      const interval$ = interval(500).pipe(
        map(val => val % 3),
        map(val => this.dots = '.'.repeat(val + 1))
      );
      this.intervalSubscription = interval$.subscribe();
    } else {
      if (this.intervalSubscription !== null) {
        this.intervalSubscription.unsubscribe();
      }
    }

  }

  @Input() loadingType: LoadingTypeEnum = LoadingTypeEnum.Circular;
  LoadingTypeEnum = LoadingTypeEnum;
  public dots = '.'

  constructor() { }

  ngOnInit(): void {

  }

}
