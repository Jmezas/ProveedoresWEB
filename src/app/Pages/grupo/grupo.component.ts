import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../Services/mantenimiento.service';
import { MessageService } from 'primeng/api';
import{ proceso} from '../../Models/Mantenimiento'
import { Router } from '@angular/router';
@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent implements OnInit {
  nombre: string | undefined;
  constructor( private apiService:MantenimientoService
    ,private messageService: MessageService,private router:Router) { }

  ngOnInit(): void {
  }
  Volver(){
    this.router.navigate(['/auth/inicio'])
  }

  Registrar(){
    let data: proceso = {};
    data.nombre=this.nombre;
    this.apiService.CreateGrupo(data).subscribe((resp:any)=>{
      console.log(resp.Value.split('|')[1])
      this.messageService.add({severity:resp.status, summary: "", detail:resp.Value});
      this.nombre=''; 
    })
  }
}
