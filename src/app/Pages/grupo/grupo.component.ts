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
  displayBasic: boolean;
  selectedCustomers: any[] = [];
  loading: boolean = false;
  listaToal:any[]=[]
  constructor( private apiService:MantenimientoService
    ,private messageService: MessageService,private router:Router) { }

  ngOnInit(): void {
  this.lista();
  }
  Volver(){
    this.router.navigate(['/auth/inicio'])
  }

  Registrar(){
    let data: proceso = {};
    data.nombre=this.nombre;
    console.log(data)
    this.apiService.CreateGrupo(data).subscribe((resp:any)=>{
      console.log(resp)
      this.messageService.add({severity:resp.status, summary: "", detail:resp.Value});
      this.nombre=''; 
      this.lista();
      this.displayBasic = false;
    })
  }
  showBasicDialog() {
    this.displayBasic = true;
}
lista(){
  let numero =1;
  this.apiService.GetListaMantenimiento(numero).subscribe((rep:any)=>{
   
    this.listaToal=rep

  })
}
}
