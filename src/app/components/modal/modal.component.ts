import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
