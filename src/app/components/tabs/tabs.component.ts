import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {tab} from "./tabs.model";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs: tab[] = []
  @Input() selectedTab: number = 0;
  @Output() selectedTabIndex = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedTabChanged(index: number) {
    if (index !== this.selectedTab) {
      this.selectedTab = index;
      this.selectedTabIndex.emit(this.selectedTab)
    }
  }
}
