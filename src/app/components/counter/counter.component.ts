import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() min = 0;
  @Input() max = Number.MAX_SAFE_INTEGER;

  constructor() { }
  value = 0;

  ngOnInit(): void {
  }

  increment() {
    if (this.value < this.max) {
      this.value++;
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value--;
    }
  }
}
