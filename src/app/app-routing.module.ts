import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentsDocumentationComponent} from "src/app/components/components-page/components-documentation.component";
import {ServicesDocumentationComponent} from "src/app/services/services-documentation/services-documentation.component";
import {PipesDocumentationComponent} from "src/app/pipes/pipes-documentation/pipes-documentation.component";
import {DirectivesDocumentationComponent} from "src/app/directives/directives-documentation/directives-documentation.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: ComponentsDocumentationComponent,
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
