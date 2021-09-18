import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent implements OnInit {

  yPosition = 0;
  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.yPosition = window.pageYOffset;
  }

  constructor(private viewPortScroller: ViewportScroller) {

  }

  ngOnInit(): void {
  }

  toTop() {
    this.viewPortScroller.scrollToPosition([0, 0])
  }
}
