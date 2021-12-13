import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-documentation',
  templateUrl: './pipes-documentation.component.html',
  styleUrls: ['./pipes-documentation.component.scss']
})
export class PipesDocumentationComponent implements OnInit {

  longText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consectetur dolor dolores earum esse expedita harum, ipsam labore nobis quam, quo repellat similique sint totam unde velit veniam, voluptatum.'
  flattenData = [1, 2, [3], [4, [5, 6, [7]]]];
  constructor() { }

  ngOnInit(): void {
  }

  public modifyFlatten(): void {
    this.flattenData.push(3, 5);
  }

  public reassignFlatten(): void {
    this.flattenData = [...this.flattenData]
  }

}
