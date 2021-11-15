import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../Services/mantenimiento.service';
import { MessageService } from 'primeng/api';
import { usuario } from '../../Models/Usuario'; 
import { Router } from '@angular/router';
interface Combo {
  name?: string,
  code?: string,
  id?:string
}
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  //nombre se registros
  usuario:string|undefined
  passward:string|undefined
  nombre:string|undefined
  correo:string|undefined

  nomPerfil:any[]=[]
  
  
  ListPerfil: Combo[] = [];


  constructor( private apiService:MantenimientoService
    ,private messageService: MessageService,private router:Router) { }

  ngOnInit(): void {
    let parametro=2;
    this.apiService.GetCombo(parametro).subscribe(res=>{
      console.log(res)
      res.forEach(e => {
        this.ListPerfil.push({ code: e.id, name: e.descripcion ,id: e.id  });
      });

    }) 
  }

  Volver(){ 
    this.router.navigate(['/auth/inicio'])
  }

  Registrar(){

    let data: usuario = {};
    data.nombre=this.nombre
    data.correo=this.correo
    data.usuario=this.usuario
    data.pass=this.passward
    data.perfil=this.nomPerfil

    console.log(data)

    this.apiService.CreateUsuario(data).subscribe((resp:any)=>{
      console.log(resp)
      console.log(resp.Value)
      this.messageService.add({severity:resp.status, summary: "", detail:resp.Value});
      this.nombre=''; 
    })
  }


}
