import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/Pages/auth/login/login.component';
import { CategoriaComponent } from '../../Pages/categoria/categoria.component';
import { GrupoComponent } from '../../Pages/grupo/grupo.component';
import { AreaComponent } from '../../Pages/area/area.component';
import { EstadoComponent } from '../../Pages/estado/estado.component';
import { PerfilesComponent } from '../../Pages/perfiles/perfiles.component';
import { EvaluacionComponent } from '../../Pages/evaluacion/evaluacion.component';
import { MensajeriaComponent } from '../../Pages/mensajeria/mensajeria.component';
import { CargarProveedoresComponent } from '../../Pages/cargar-proveedores/cargar-proveedores.component'; 
import { InicioComponent } from './../../Pages/inicio/inicio.component';
import { UsuarioComponent } from './../../Pages/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'categoria', component: CategoriaComponent },
      { path: 'grupo', component: GrupoComponent },
      { path: 'area', component: AreaComponent },
      { path: 'estado', component: EstadoComponent },
      { path: 'perfil', component: PerfilesComponent },
      { path: 'evaluacion', component: EvaluacionComponent },
      { path: 'mensaje', component: MensajeriaComponent },
      { path: 'carga', component: CargarProveedoresComponent },
      { path: '**', redirectTo: 'login' }
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }
