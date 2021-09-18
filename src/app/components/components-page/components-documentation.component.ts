import { Component, OnInit } from '@angular/core';
import {AccordionItemModel} from "src/app/components/accordion/accordion-item.model";

@Component({
  selector: 'app-components-page',
  templateUrl: './components-documentation.component.html',
  styleUrls: ['./components-documentation.component.scss']
})
export class ComponentsDocumentationComponent {

  title = 'angular-challenges';
  items: AccordionItemModel[] = [
    {
      title: 'Title 1',
      content: 'This is title 1 content',
      isExpanded: false
    },
    {
      title: 'Title 2',
      content: 'This is title 2 content',
      isExpanded: true
    },
    {
      title: 'Title 3',
      content: 'This is title 3 content',
      isExpanded: false
    }
  ];
  progressValue = 25;

}
