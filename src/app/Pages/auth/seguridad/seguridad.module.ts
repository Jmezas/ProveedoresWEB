import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { EnvioCorreoComponent } from './envio-correo/envio-correo.component';


@NgModule({
  declarations: [
    EnvioCorreoComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
