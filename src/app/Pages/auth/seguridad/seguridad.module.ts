import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { ResetPaswordComponent } from './reset-pasword/reset-pasword.component';
import { EnvioCorreoComponent } from './envio-correo/envio-correo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from "primeng/button";
import { ToastModule } from 'primeng/toast'; 
import {MessageModule} from 'primeng/message';
@NgModule({
  declarations: [
    ResetPaswordComponent,
    EnvioCorreoComponent, 
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule ,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule
  ]
})
export class SeguridadModule { }
