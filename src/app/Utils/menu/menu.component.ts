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
        label: 'Inicio',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Usuario',
            icon: 'pi pi-fw pi-plus', 
          } 
        ]
      },
      {
        label: 'Registro',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'registro',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'carga d.',
            icon: 'pi pi-fw pi-align-right'
          },

        ]
      },
      {
        label: 'Seguimiento',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'revision',
            icon: 'pi pi-fw pi-user-plus',

          }

        ]
      },
      {
        label: 'Evaluacion',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'reclamo',
            icon: 'pi pi-fw pi-pencil',

          },

        ]
      },
      {
        label: 'Mantenimiento',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Cuestionario',
            icon: 'pi pi-fw pi-pencil',
          },
          {
            label: 'Requisito',
            icon: 'pi pi-fw pi-pencil',
          },
          {
            label: 'Preguntas',
            icon: 'pi pi-fw pi-pencil',
          },
          {
            label: 'usuario',
            icon: 'pi pi-fw pi-pencil',
            command:(click)=>{this.router.navigate(['/auth/usuario']);} 
          },
          {
            label: 'Compradores',
            icon: 'pi pi-fw pi-pencil',
          },
          {
            label: 'estado proveedor',
            icon: 'pi pi-fw pi-pencil',
            command:(click)=>{this.router.navigate(['/auth/estado']);} 
          },
          {
            label: 'estado evaluacion',
            icon: 'pi pi-fw pi-pencil',
            command:(click)=>{this.router.navigate(['/auth/evaluacion']);} 
          },
          {
            label: 'categoria',
            icon: 'pi pi-fw pi-pencil',
            //url:'/auth/categoria'
            command:(click)=>{this.router.navigate(['/auth/categoria']);} 
          },
          {
            label: 'grupo',
            icon: 'pi pi-fw pi-pencil', 
            command:(click)=>{this.router.navigate(['/auth/grupo']);} 
          },
          {
            label: 'area',
            icon: 'pi pi-fw pi-pencil', 
            command:(click)=>{this.router.navigate(['/auth/area']);} 
          },
          {
            label: 'perfil',
            icon: 'pi pi-fw pi-pencil', 
            command:(click)=>{this.router.navigate(['/auth/perfil']);} 
          },
          {
            label: 'mensaje',
            icon: 'pi pi-fw pi-pencil', 
            command:(click)=>{this.router.navigate(['/auth/mensaje']);} 
          }
        ]
      }
    ];
  }

  salir(){
    
    this.router.navigate(['/auth/login'])
  }
  


}
