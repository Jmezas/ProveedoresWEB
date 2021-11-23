import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutPrincipalComponent } from './Components/layout/layout-principal/layout-principal.component';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MessagesModule } from 'primeng/messages';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { MenuComponent } from './Utils/menu/menu.component';
import { MenuTopComponent } from './Utils/menu-top/menu-top.component';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule } from '@angular/forms';
import { CategoriaComponent } from './Pages/categoria/categoria.component';
import { GrupoComponent } from './Pages/grupo/grupo.component';
import { ToastModule } from 'primeng/toast';
import { EstadoComponent } from './Pages/estado/estado.component';
import { DropdownModule } from 'primeng/dropdown';
import { AreaComponent } from './Pages/area/area.component';
import { PerfilesComponent } from './Pages/perfiles/perfiles.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import {TableModule} from 'primeng/table';
import { EvaluacionComponent } from './Pages/evaluacion/evaluacion.component';
import { MensajeriaComponent } from './Pages/mensajeria/mensajeria.component';
import { CargarProveedoresComponent } from './Pages/cargar-proveedores/cargar-proveedores.component'; 
import { SeguridadModule } from './Pages/auth/seguridad/seguridad.module';
import { SegmentacionComponent } from './Pages/segmentacion/segmentacion.component'; 
 import { DialogModule } from "primeng/dialog";
import { ReclamosComponent } from './Pages/reclamos/reclamos.component';
import { CuentionarioComponent } from './Pages/cuentionario/cuentionario.component';
import { PreguntasComponent } from './Pages/preguntas/preguntas.component';
import { SeguimientoComponent } from './Pages/seguimiento/seguimiento.component';
import { RevicionComponent } from './Pages/revicion/revicion.component';
import { SegevaluacionComponent } from './Pages/segevaluacion/segevaluacion.component';
import { SeguimientoReclamosComponent } from './Pages/seguimiento-reclamos/seguimiento-reclamos.component';
import { MisReclamosComponent } from './Pages/mis-reclamos/mis-reclamos.component';
import {MessageModule} from 'primeng/message';
import { TipificacionReclamoComponent } from './Pages/tipificacion-reclamo/tipificacion-reclamo.component';
import {PanelModule} from 'primeng/panel';
@NgModule({
  declarations: [
    AppComponent,
    LayoutPrincipalComponent,
    TopbarComponent,
    SidebarComponent,
    InicioComponent, MenuComponent, MenuTopComponent, UsuarioComponent, CategoriaComponent, GrupoComponent, EstadoComponent, AreaComponent, PerfilesComponent, EvaluacionComponent, MensajeriaComponent, CargarProveedoresComponent, SegmentacionComponent, ReclamosComponent, CuentionarioComponent, PreguntasComponent, SeguimientoComponent, RevicionComponent, SegevaluacionComponent, SeguimientoReclamosComponent, MisReclamosComponent, TipificacionReclamoComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MessagesModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
    TabViewModule,
    FormsModule,
    ToastModule,
    DropdownModule,
    MenubarModule,
    CardModule,
    TableModule,
    SeguridadModule, 
    DialogModule,
    ReactiveFormsModule,
    MessageModule,
    PanelModule
  ],
  providers: [

    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
