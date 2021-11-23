import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ProcesoService } from './../../Services/proceso.service';
import { Menu } from 'src/app/Models/Menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];
  items2!: MenuItem[];
  ListPMenu: Menu[] = []; 
  constructor(private router:Router, private apiService:ProcesoService) { }

  ngOnInit(): void {

    let usuario='admin';
    this.apiService.ListaMenu(usuario).subscribe((res:any)=>{
      //this.ListPMenu=res 
      this.items2=res
    })

    this.items = [
      {
        label: 'Principal',
        icon: 'pi pi-fw pi-file',
        command:(click)=>{this.router.navigate(['/auth/inicio']);} 
      },
      {
        label: 'Manuales',
        icon: 'pi pi-fw pi-file',
        items: [{
          label: 'Descargar',
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
            label: 'Revisión',
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
            label: 'Estado Evaluación',
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
          // {
          //   label: 'Area',
          //   icon: 'pi pi-fw pi-pencil', 
          //   command:(click)=>{this.router.navigate(['/auth/area']);} 
          // },
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
            label: 'Proveedores',
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
