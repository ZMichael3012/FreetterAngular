import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrimengModule } from "../../shared/primeng.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AccountManagementService} from "./services/account-management.service";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    PrimengModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AccountManagementService
  ]
})
export class AccountModule { }
