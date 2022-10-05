import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewYorkCompComponent } from "../new-york-comp/new-york-comp.component";
import { WashingtonCompComponent } from "../washington-comp/washington-comp.component";

@NgModule({
  declarations: [NewYorkCompComponent, WashingtonCompComponent],
  imports: [
    CommonModule
  ],
  exports: [NewYorkCompComponent, WashingtonCompComponent]
})
export class UsaModModule { }
