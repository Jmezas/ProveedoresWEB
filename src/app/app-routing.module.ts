import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {
    path:'auth',
    loadChildren:() => import('./Modules/auth/auth.module').then(m => m.AuthModule) 
  }, 
  {
    path:'inicio',
    loadChildren:() => import('./Pages/inicio/inicio.component').then(m => m.InicioComponent) 
  }, 
  {
    path:'usuario',
    loadChildren:() => import('./Pages/usuario/usuario.component').then(m => m.UsuarioComponent) 
  }, 
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
