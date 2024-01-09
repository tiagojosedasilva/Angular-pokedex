import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    RoutingModule,
    DetailsComponent
  ]
})
export class PagesModule { }
