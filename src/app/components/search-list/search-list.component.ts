import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  searchEmpty: boolean = true;
  countries: string[] = ['United States', 'United Kingdom', 'Mexico', 'Moldova', 'Poland'];
  searchTerm: string = '';
  hasBeenSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showList() {
    return !this.searchEmpty && !this.hasBeenSelected;
  }

  searchChanged(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.searchEmpty = !searchTerm;
  }

  selectCountry() {
    this.hasBeenSelected = true;
  }
}
