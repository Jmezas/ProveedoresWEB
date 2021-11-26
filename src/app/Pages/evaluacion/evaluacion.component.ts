import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../Services/mantenimiento.service';
import { MessageService } from 'primeng/api';
import { proceso } from '../../Models/Mantenimiento'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { dataEnvio } from 'src/app/Models/datoEnvio';
@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.scss']
})
export class EvaluacionComponent implements OnInit {

  nombre: string | undefined;
  id: number | undefined = 0;
  displayBasic: boolean;
  selectedCustomers: any[] = [];
  loading: boolean = false;
  listaToal: any[] = []
  constructor(private apiService: MantenimientoService
    , private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.lista()
  }

  Registrar() {
    let data: proceso = {};
    data.nombre = this.nombre;
    data.id = this.id;
    this.apiService.CreateEvaluacion(data).subscribe((resp: any) => {
      this.messageService.add({ severity: resp.status, summary: "", detail: resp.Value });
      this.nombre = '';
      this.id = 0;
      this.lista();
      this.displayBasic = false;
    })
  }

  Volver() {
    this.router.navigate(['/auth/inicio'])
  }
  lista() {
    let numero = 5;
    this.apiService.GetListaMantenimiento(numero).subscribe((rep: any) => {

      this.listaToal = rep

    })
  }
  showBasicDialog() {
    this.displayBasic = true;
  }

  obtener(codigo: any) {
    this.displayBasic = true;
    let data: dataEnvio = {}
    data.id = 5;
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
        data.id = 5;
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
