import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../Services/mantenimiento.service';
import { MessageService } from 'primeng/api';
import { proceso } from '../../Models/Mantenimiento'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { dataEnvio } from 'src/app/Models/datoEnvio';
@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent implements OnInit {
  nombre: string | undefined;
  id: number | undefined = 0;
  displayBasic: boolean;
  selectedCustomers: any[] = [];
  loading: boolean = false;
  listaToal: any[] = []
  constructor(private apiService: MantenimientoService
    , private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.lista();
  }
  Volver() {
    this.router.navigate(['/auth/inicio'])
  }

  Registrar() {
    let data: proceso = {};
    data.nombre = this.nombre;
    data.id = this.id
    console.log(data)
    this.apiService.CreateGrupo(data).subscribe((resp: any) => {
      console.log(resp)
      this.messageService.add({ severity: resp.status, summary: "", detail: resp.Value });
      this.nombre = '';
      this.lista();
      this.displayBasic = false;
    })
  }
  showBasicDialog() {
    this.displayBasic = true;
  }
  lista() {
    let numero = 1;
    this.apiService.GetListaMantenimiento(numero).subscribe((rep: any) => {
      this.listaToal = rep

    })
  }
  obtener(codigo: any) {
    this.displayBasic = true;
    let data: dataEnvio = {}
    data.id = 1;
    data.codigo = codigo.id;
    console.log(data)
    this.apiService.ObtenerData(data).subscribe((res: any) => {
      this.nombre = res.nombre
      this.id = res.id

    })
  }

  eliminar(constumer: any) {
    Swal.fire({
      title: `¿estas seguro de eliminar a ${constumer["nombre"]}?  `,
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, elimiar!'
    }).then((result) => {
      if (result.isConfirmed) {
        let data: dataEnvio = {}
        data.id = 3;
        data.codigo = constumer.id;
        this.apiService.EliminarData(data).subscribe((res: any) => {

          console.log(res)
          Swal.fire(
            'Eliminado!',
            res.Value,
            res.status
          )
          this.lista();
        })
      }
    })


  }
}
