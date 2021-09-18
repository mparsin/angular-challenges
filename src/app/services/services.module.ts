import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServicesDocumentationComponent} from "src/app/services/services-documentation/services-documentation.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ServicesDocumentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ServicesDocumentationComponent
    }])
  ]
})
export class ServicesModule { }
