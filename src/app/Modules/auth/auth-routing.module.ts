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
import { SegmentacionComponent } from 'src/app/Pages/segmentacion/segmentacion.component';
import { ReclamosComponent } from 'src/app/Pages/reclamos/reclamos.component';
import { PreguntasComponent } from 'src/app/Pages/preguntas/preguntas.component';
import { CuentionarioComponent } from 'src/app/Pages/cuentionario/cuentionario.component';
import { SeguimientoComponent } from 'src/app/Pages/seguimiento/seguimiento.component';
import { RevicionComponent } from 'src/app/Pages/revicion/revicion.component';
import { SegevaluacionComponent } from 'src/app/Pages/segevaluacion/segevaluacion.component';
import { SeguimientoReclamosComponent } from 'src/app/Pages/seguimiento-reclamos/seguimiento-reclamos.component';
import { MisReclamosComponent } from 'src/app/Pages/mis-reclamos/mis-reclamos.component';
import { TipificacionReclamoComponent } from 'src/app/Pages/tipificacion-reclamo/tipificacion-reclamo.component';

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
      { path: 'perfil', component: PerfilesComponent},
      { path: 'evaluacion', component: EvaluacionComponent },
      { path: 'mensaje', component: MensajeriaComponent },
      { path: 'carga', component: CargarProveedoresComponent },
      { path: 'segmentacion', component: SegmentacionComponent },
      { path: 'reclamos', component: ReclamosComponent },
      { path: 'preguntas', component: PreguntasComponent },
      { path: 'cuestionario', component: CuentionarioComponent },
      { path: 'seguimiento', component: SeguimientoComponent },
      { path: 'revision', component: RevicionComponent },
      { path: 'Segevaluacion', component: SegevaluacionComponent },
      { path: 'Reclamoseguimiento', component: SeguimientoReclamosComponent },
      { path: 'misReclamos', component: MisReclamosComponent },
      { path: 'tipiReclamo', component: TipificacionReclamoComponent },
      { path: '**', redirectTo: 'login' }
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }
