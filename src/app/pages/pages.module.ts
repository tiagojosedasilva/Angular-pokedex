import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PagesRouterModule } from './pages.router.module';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent,
    ],
    imports: [
        CommonModule,
        PagesRouterModule,
        SharedModule
    ]
})
export class PagesModule { }
