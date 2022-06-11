import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from "primeng/inputtext";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from "primeng/button";
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";
import {InputTextareaModule} from "primeng/inputtextarea";

const PrimeNgModules = [
  InputTextModule,
  DialogModule,
  ButtonModule,
  CalendarModule,
  MenuModule,
  MenubarModule,
  TableModule,
  InputTextareaModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...PrimeNgModules
  ],
  exports: [
    CommonModule,
    ...PrimeNgModules
  ]
})
export class PrimengModule { }
