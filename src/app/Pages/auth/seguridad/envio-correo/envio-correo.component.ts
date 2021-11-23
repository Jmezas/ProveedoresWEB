import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { proceso } from 'src/app/Models/Mantenimiento';
import { ProcesoService } from 'src/app/Services/proceso.service';

@Component({
  selector: 'app-envio-correo',
  templateUrl: './envio-correo.component.html',
  styleUrls: ['./envio-correo.component.scss']
})
export class EnvioCorreoComponent implements OnInit {
  nombre:string
  constructor(private api:ProcesoService,private messageService: MessageService,private router: Router) { }

  ngOnInit(): void {
  }
  Procesar(){
    console.log("entro")
    let data: proceso = {};
    data.nombre=this.nombre
    this.api.enviarCorreo(data).subscribe((resp:any)=>{
      console.log(resp)
      this.nombre=''
      this.messageService.add({severity:resp.status, summary: "", detail:resp.Value});
    })
  }
  volver(){
    this.router.navigate(['/auth/login']);
  }

}
