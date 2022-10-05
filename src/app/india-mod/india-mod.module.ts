import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDelhiCompComponent } from "../new-delhi-comp/new-delhi-comp.component";
import { NewMumbaiCompComponent } from "../new-mumbai-comp/new-mumbai-comp.component";

@NgModule({
  declarations: [NewDelhiCompComponent, NewMumbaiCompComponent],
  exports: [NewDelhiCompComponent, NewMumbaiCompComponent],
  imports: [
    CommonModule
  ]
})
export class IndiaModModule { }
