import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {PipesDocumentationComponent} from "./pipes-documentation/pipes-documentation.component";
import {SharedModule} from "../shared/shared.module";
import {TruncatePipe} from "./truncate.pipe";
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';
import { FlattenPipe } from './flatten.pipe';
import { FilterTermPipe } from './filter-term/filter-term.pipe';

@NgModule({
    declarations: [
        PipesDocumentationComponent,
        TruncatePipe,
        CreditCardFormatterPipe,
        FlattenPipe,
        FilterTermPipe
    ],
    exports: [
        FilterTermPipe
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([{
            path: '',
            component: PipesDocumentationComponent
        }])
    ]
})
export class PipesModule {

}
