import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from './../../Services/mantenimiento.service';
import Swal from 'sweetalert2'
import { dataEnvio } from 'src/app/Models/datoEnvio';
import { proceso } from 'src/app/Models/Mantenimiento';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.scss']
})
export class MensajeriaComponent implements OnInit {
  nombre: string | undefined;
  id: number | undefined = 0;
  displayBasic: boolean;
  selectedCustomers: any[] = [];
  loading: boolean = false;
  listaToal: any[] = []
  tenor1: String;
  idtenor1: number | undefined = 0;
  tenor2: string
  idtenor2: number | undefined = 0;
  tenor3: string
  idtenor3: number | undefined = 0;

  emcabezado: string = ''
  mensaje: string = ''
  dias: number
  depsedida: string = ''
  cancatenacion: string = ''



  config: any = {
    placeholder: '',
    tabsize: 2,
    height: '200px',
    uploadImagePath: '/api/upload',
    toolbar: [
      ['misc', ['codeview', 'undo', 'redo']],
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'picture', 'link', 'video', 'hr']]
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  }
  constructor(private apiService: MantenimientoService, private messageService: MessageService) { }

  ngOnInit(): void {

    //obtener info
    let data: dataEnvio = {}
    data.id = 7;
    data.codigo = this.id;
    this.apiService.ObtenerData(data).subscribe((res: any) => {
      this.nombre = res.nombre
      this.id = res.id
    })

    //tenor
    let teno1 = 8
    this.apiService.GetListaMantenimiento(teno1).subscribe((res: any) => {
      this.mensaje = res[0].nombre
      this.dias = res[0].value
      this.idtenor1 = res[0].id
    })

    let teno2 = 9
    this.apiService.GetListaMantenimiento(teno2).subscribe((res: any) => {
      this.tenor2 = res[0].nombre
      this.idtenor2 = res[0].id
    })


    let teno3 = 10
    this.apiService.GetListaMantenimiento(teno3).subscribe((res: any) => {
      this.tenor3 = res[0].nombre
      this.idtenor3 = res[0].id
    })

  }



  concatCabecera(evento: any) {

    this.cancatenacion = `${evento}  ${this.mensaje}  ${this.dias}  ${this.depsedida}`
  }

  concatMensaje(evento: any) {
    this.cancatenacion = `${this.emcabezado}  ${evento}  ${this.dias}  ${this.depsedida}`
  }

  concatDias(evento: any) {
    this.cancatenacion = `${this.emcabezado}  ${this.mensaje}  ${evento} dias  ${this.depsedida}`
  }

  concatDespedida(evento: any) {
    this.cancatenacion = `${this.emcabezado}  ${this.mensaje}  ${this.dias} dias  ${evento}`
  }


  Registrartenor1() {
    let data: proceso = {};
    data.nombre = this.mensaje;
    data.dias = this.dias;
    data.id = this.idtenor1;
    data.tipo = 1
    this.apiService.Createtenor1(data).subscribe((resp: any) => {
      this.idtenor1 = resp.detalle
      this.messageService.add({ severity: resp.status, summary: "", detail: resp.Value });

    })
  }


  Registrartenor2() {
    let data: proceso = {};
    data.nombre = this.tenor2;
    data.id = this.idtenor2;
    data.dias = 0;
    data.tipo = 2
    this.apiService.Createtenor1(data).subscribe((resp: any) => {
      // this.tenor2 = ''
      // this.dias = 0;
      this.idtenor2 = resp.detalle
      this.messageService.add({ severity: resp.status, summary: "", detail: resp.Value });

    })
  }


  Registrartenor3() {
    let data: proceso = {};
    data.nombre = this.tenor3;
    data.id = this.idtenor3;
    data.dias = 0;
    data.tipo = 3
    this.apiService.Createtenor1(data).subscribe((resp: any) => {
      // this.tenor3 = ''
      // this.dias = 0;
      this.idtenor3 = resp.detalle
      this.messageService.add({ severity: resp.status, summary: "", detail: resp.Value });

    })
  }


  Registrar() {
    let data: proceso = {};
    data.nombre = this.nombre;
    data.id = this.id;
    this.apiService.CreateTermino(data).subscribe((resp: any) => {
      this.messageService.add({ severity: resp.status, summary: "", detail: resp.Value });

    })
  }







}
