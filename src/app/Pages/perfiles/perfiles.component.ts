import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../Services/mantenimiento.service';
import { MessageService } from 'primeng/api';
import{ proceso} from '../../Models/Mantenimiento'
import { Router } from '@angular/router';
interface Articulo {
  name?: string,
  code?: string
}

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss']
})

export class PerfilesComponent implements OnInit {
  nombre: string | undefined;
  ListArea: Articulo[] = [];
  displayBasic: boolean;
  nomArea: Articulo = {};
  listaToal:any[]=[]
  selectedCustomers: any[] = [];
  loading: boolean = false;
  constructor( private apiService:MantenimientoService
    ,private messageService: MessageService,private router:Router) { }

  ngOnInit(): void { 

    let parametro=1;
    this.apiService.GetCombo(parametro).subscribe(res=>{
      res.forEach(e => {
        this.ListArea.push({ code: e.id, name: e.descripcion });
      });

    })
    //listar
    this.lista();
  }
  showBasicDialog() {
    this.displayBasic = true;
}
  Volver(){ 
    this.router.navigate(['/auth/inicio'])
  }

  Registrar(){
    let data: proceso = {};
    data.nombre=this.nombre;
    data.idArea=this.nomArea.code 
    this.apiService.CreatePerfil(data).subscribe((resp:any)=>{
      console.log(resp.Value)
      this.messageService.add({severity:resp.status, summary: "", detail:resp.Value});
      this.nombre=''; 
      this.lista();
      this.displayBasic = false;
    })
  }

  lista(){
    let numero =6;
    this.apiService.GetListaMantenimiento(numero).subscribe((rep:any)=>{
     
      this.listaToal=rep
  
    })
  }
}
