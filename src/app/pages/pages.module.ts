import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PagesRouterModule } from './pages.router.module';
import { SharedModule } from "../shared/shared.module";
import { PokeApiService } from '../service/poke-api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent,
    ],
    imports: [
        CommonModule,
        PagesRouterModule,
        SharedModule,
        HttpClientModule
    ],
    providers:[
        PokeApiService
    ]
})
export class PagesModule { }
