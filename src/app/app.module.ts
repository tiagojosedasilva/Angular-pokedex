import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppRouterModule } from "./app.routes";
import { PagesModule } from "./pages/pages.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule, 
    RouterOutlet, 
    PagesModule, 
    AppRouterModule,
    HttpClientModule,
  ],
  providers: [
    
  ]
})
export class AppModule{}