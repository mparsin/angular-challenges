import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {PipesDocumentationComponent} from "src/app/pipes/pipes-documentation/pipes-documentation.component";
import {AppModule} from "../app.module";
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import {FormsModule} from "@angular/forms";
import { ModalComponent } from './modal/modal.component';
import { QuoteComponent } from './quote/quote.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SearchTermComponent } from './search-term/search-term.component';
import { SearchListComponent } from './search-list/search-list.component';
import {PipesModule} from "../pipes/pipes.module";
import { CounterComponent } from './counter/counter.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { PagerComponent } from './pager/pager.component';
import { TabsComponent } from './tabs/tabs.component';
import { FadeInComponent } from './fade-in/fade-in.component';

@NgModule({
  declarations: [

    CreditCardInputComponent,
     ModalComponent,
     QuoteComponent,
     ToggleComponent,
     SearchTermComponent,
     SearchListComponent,
     CounterComponent,
     SimpleTableComponent,
     PagerComponent,
     TabsComponent,
     FadeInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PipesDocumentationComponent
      }
    ]),
    FormsModule,
    PipesModule
  ],
    exports: [
        CreditCardInputComponent,
        ModalComponent,
        QuoteComponent,
        ToggleComponent,
        SearchTermComponent,
        SearchListComponent,
        CounterComponent,
        SimpleTableComponent,
        PagerComponent,
        TabsComponent,
        FadeInComponent
    ]
})
export class ComponentsModule { }
