import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, APP_ROUTES} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {CardComponent} from './components/card/card.component';
import {AccordionComponent} from './components/accordion/accordion.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {StarRatingsComponent} from './components/star-ratings/star-ratings.component';
import {TopOfPageComponent} from './components/top-of-page/top-of-page.component';
import {ComponentsDocumentationComponent} from 'src/app/components/components-page/components-documentation.component';
import {RouterModule, Routes} from "@angular/router";
import {LoadingComponent} from './components/loading/loading.component';
import {SharedModule} from "./shared/shared.module";
import {ComponentsModule} from "./components/components.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    ComponentsDocumentationComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    AppRoutingModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
