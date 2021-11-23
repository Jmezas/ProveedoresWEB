import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPaswordComponent } from './Pages/auth/seguridad/reset-pasword/reset-pasword.component';


const routes: Routes = [
  
  {
    path:'auth',
    loadChildren:() => import('./Modules/auth/auth.module').then(m => m.AuthModule) 
  },  
  {
    path: 'seguridad', 
    loadChildren: () => import('./Pages/auth/seguridad/seguridad.module').then(m => m.SeguridadModule)
  },
  
  {
    path:'**',
    redirectTo:'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
