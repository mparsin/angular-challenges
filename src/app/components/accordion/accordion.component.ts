import {Component, Input, OnInit} from '@angular/core';
import {AccordionItemModel} from "src/app/components/accordion/accordion-item.model";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() items: AccordionItemModel[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
