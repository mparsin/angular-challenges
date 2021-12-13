import {Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {debounce, debounceTime} from "rxjs/operators";

@Directive({
  selector: '[appDebounce]'
})
export class DebounceDirective implements OnInit, OnDestroy {
  private subscription!: Subscription;

  @Output() onClicked = new EventEmitter()

  @HostListener('click', ) onClick() {
    console.log('directive', 'click')
    this.subject.next()
  }
  private subject = new Subject()

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.subject.pipe(
      debounceTime(300)
    ).subscribe(value => this.onClicked.emit())
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
