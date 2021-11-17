import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPaswordComponent } from './reset-pasword/reset-pasword.component';
import { EnvioCorreoComponent } from './envio-correo/envio-correo.component';

const routes: Routes = [
  {
    path: 'password',
    component: ResetPaswordComponent, 
  },
  {
    path: 'envioCorreo',
    component: EnvioCorreoComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
