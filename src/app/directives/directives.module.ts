import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DirectivesDocumentationComponent} from "src/app/directives/directives-documentation/directives-documentation.component";
import { DebounceDirective } from './debounce.directive';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { RippleDirective } from './ripple.directive';



@NgModule({
  declarations: [
    DirectivesDocumentationComponent,
    DebounceDirective,
    RippleDirective
  ],
    imports: [
        CommonModule,
        SharedModule,
      RouterModule.forChild([{
        path: '',
        component: DirectivesDocumentationComponent
      }])
    ]
})
export class DirectivesModule { }
