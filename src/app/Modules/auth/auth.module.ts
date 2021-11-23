import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/Pages/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    ToastModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class AuthModule { }
