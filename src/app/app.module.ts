import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaCompComponent } from './india-comp/india-comp.component';
import { UsaCompComponent } from './usa-comp/usa-comp.component';
import { UsaModModule } from "./usa-mod/usa-mod.module";
import { IndiaModModule } from "./india-mod/india-mod.module";

@NgModule({
  declarations: [
    AppComponent,
    IndiaCompComponent,
    UsaCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsaModModule,
    IndiaModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
