import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {
  @Input() tableData = [
    {
      first: 'Maxim',
      last: 'Parsin',
      dob: '11/16/2021'
    },
    {
      first: 'Dmitry',
      last: 'Parsin',
      dob: '11/28/1985'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  language = 'en';
  onLanguageSelect(language: string): void {
    this.language = language;
  }

}
