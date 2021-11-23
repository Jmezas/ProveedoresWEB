import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Principal',
        icon: 'pi pi-fw pi-file',
        command:(click)=>{this.router.navigate(['/auth/inicio']);} 
      },
      {
        label: 'manuales',
        icon: 'pi pi-fw pi-file',
        items: [{
          label: 'descargar',
          icon: 'pi pi-fw pi-file',
          command:(click)=>{this.router.navigate(['/auth/manuales']);} 
        }
       ]
      },
      {
        label: 'Cuestionario',
        icon: 'pi pi-fw pi-file',
        command:(click)=>{this.router.navigate(['/auth/cuestionario']);} 
       
      },
      {
        label: 'Seguimiento',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'revision',
            icon: 'pi pi-fw pi-user-plus',
            command:(click)=>{this.router.navigate(['/auth/revision']);} 
          }

        ]
      },
      {
        label: 'Evaluación',
        icon: 'pi pi-fw pi-user',
        command:(click)=>{this.router.navigate(['/auth/Segevaluacion']);} 
         
      }, 
      {
        label: 'Reclamos',
        icon: 'pi pi-fw pi-calendar',
        items: [ 
          {
            label: 'Registro',
            icon: 'pi pi-fw pi-calendar',
            command:(click)=>{this.router.navigate(['/auth/reclamos']);}  
          },
          {
            label: 'Seguimiento Reclamos',
            icon: 'pi pi-fw pi-calendar',
            command:(click)=>{this.router.navigate(['/auth/Reclamoseguimiento']);}  
          },
          {
            label: 'Mis Reclamos',
            icon: 'pi pi-fw pi-calendar',
            command:(click)=>{this.router.navigate(['/auth/misReclamos']);}  
          }
        ]
       
      },
      {
        label: 'Mantenimiento',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Cuestionario',
            icon: 'pi pi-fw pi-pencil',
            command:(click)=>{this.router.navigate(['/auth/cuestionario']);} 
          },
          {
            label: 'Requisito',
            icon: 'pi pi-fw pi-pencil',
          },
          {
            label: 'Preguntas',
            icon: 'pi pi-fw pi-pencil',
            command:(click)=>{this.router.navigate(['/auth/preguntas']);} 
          },
          {
            label: 'Usuario',
            icon: 'pi pi-fw pi-pencil',
            command:(click)=>{this.router.navigate(['/auth/usuario']);} 
          },
          {
            label: 'Compradores',
            icon: 'pi pi-fw pi-pencil',
          },
          {
            label: 'Estado proveedor',
            icon: 'pi pi-fw pi-pencil',
            command:(click)=>{this.router.navigate(['/auth/estado']);} 
          },
          {
            label: 'Estado evaluacion',
            icon: 'pi pi-fw pi-pencil',
            command:(click)=>{this.router.navigate(['/auth/evaluacion']);} 
          },
          {
            label: 'Categoria',
            icon: 'pi pi-fw pi-pencil',
           
            command:(click)=>{this.router.navigate(['/auth/categoria']);} 
          },
          {
            label: 'Grupo',
            icon: 'pi pi-fw pi-pencil', 
            command:(click)=>{this.router.navigate(['/auth/grupo']);} 
          },
          {
            label: 'Area',
            icon: 'pi pi-fw pi-pencil', 
            command:(click)=>{this.router.navigate(['/auth/area']);} 
          },
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-pencil', 
            command:(click)=>{this.router.navigate(['/auth/perfil']);} 
          },
         
          {
            label: 'Tipificación de reclamos',
            icon: 'pi pi-fw pi-pencil', 
            command:(click)=>{this.router.navigate(['/auth/tipiReclamo']);} 
          },
          {
            label: 'Catálogo Mensaje',
            icon: 'pi pi-fw pi-pencil', 
            command:(click)=>{this.router.navigate(['/auth/mensaje']);} 
          },
          {
            label: 'proveedores',
            icon: 'pi pi-fw pi-pencil', 
            items:[{
              label: 'Carga de prov.',
              icon: 'pi pi-fw pi-pencil', 
              command:(click)=>{this.router.navigate(['/auth/carga']);} 
            },
            {
              label: 'segmentacion',
              icon: 'pi pi-fw pi-pencil', 
              command:(click)=>{this.router.navigate(['/auth/segmentacion']);} 
            },
          ] 
          },
         
          
        ]
      },
    
    ];
  }

  salir(){
    
    this.router.navigate(['/auth/login'])
  }
  


}
