import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../Services/mantenimiento.service';
import { MessageService } from 'primeng/api';
import{ proceso} from '../../Models/Mantenimiento'
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.scss']
})
export class EvaluacionComponent implements OnInit {

  nombre: string | undefined;
  constructor( private apiService:MantenimientoService
    ,private messageService: MessageService,private router:Router) { }

  ngOnInit(): void {
  }

  Registrar(){
    let data: proceso = {};
    data.nombre=this.nombre;
    this.apiService.CreateEvaluacion(data).subscribe((resp:any)=>{
      console.log(resp.Value)
      this.messageService.add({severity:resp.status, summary: "", detail:resp.Value});
      this.nombre=''; 
    })
  }

  Volver(){ 
    this.router.navigate(['/auth/inicio'])
  }
}
