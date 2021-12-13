import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {debounce, debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-search-term',
  templateUrl: './search-term.component.html',
  styleUrls: ['./search-term.component.scss']
})
export class SearchTermComponent implements OnInit {
  searchTerm: string = '';
  @Input() placeholder: string = '';
  @Output() searchChanged = new EventEmitter();

  private searchSubj$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.searchSubj$.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(
      val=> {
        this.searchChanged.emit(this.searchTerm)
      }
    )
  }

  searchTermChanged(event: any) {
    this.searchSubj$.next(this.searchTerm)
  }
}
