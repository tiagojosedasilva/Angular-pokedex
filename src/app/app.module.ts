import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app.routes";
import { PagesModule } from "./pages/pages.module";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, RouterOutlet, PagesModule, AppRoutingModule],
    providers: [],
    bootstrap: []
})
export class AppModule{}