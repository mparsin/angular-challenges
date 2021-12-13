import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Input() totalItems: number = 0;
  @Input() pageSize: number = 25;
  @Input() currentPage: number = 0;

  public get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  public get pages(): number[] {
    const result: number[] = [];
    const minPage = Math.max(0, this.currentPage - 2);
    for(let i = minPage; i < Math.min(minPage + 4, this.totalPages); i++) {
        result.push(i + 1)
      }

    return result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
