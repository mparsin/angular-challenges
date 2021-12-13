import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  @Input() quote: string = '';
  @Input() author: string = '';
  @Input() title: string = '';

  ngOnInit(): void {
  }

}
