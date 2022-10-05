import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaCompComponent } from './india-comp/india-comp.component';
import { UsaCompComponent } from './usa-comp/usa-comp.component';
import { NewDelhiCompComponent } from './new-delhi-comp/new-delhi-comp.component';
import { NewMumbaiCompComponent } from './new-mumbai-comp/new-mumbai-comp.component';
import { NewYorkCompComponent } from './new-york-comp/new-york-comp.component';
import { WashingtonCompComponent } from './washington-comp/washington-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiaCompComponent,
    UsaCompComponent,
    NewDelhiCompComponent,
    NewMumbaiCompComponent,
    NewYorkCompComponent,
    WashingtonCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
