import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppRouterModule } from "./app.routes";
import { PagesModule } from "./pages/pages.module";

@NgModule({
  imports: [CommonModule, RouterOutlet, PagesModule, AppRouterModule],
})
export class AppModule{}