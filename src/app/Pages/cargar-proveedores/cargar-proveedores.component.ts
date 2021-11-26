import { Component, OnInit } from '@angular/core';
import { Proveedores } from 'src/app/Models/proveedores';
import { ProcesoService } from '../../Services/proceso.service';
import { MessageService } from 'primeng/api';
import * as XLSX from 'xlsx'
import { usuario } from 'src/app/Models/Usuario';
import { AuthService } from 'src/app/Services/Auth.Service';
@Component({
  selector: 'app-cargar-proveedores',
  templateUrl: './cargar-proveedores.component.html',
  styleUrls: ['./cargar-proveedores.component.scss']
})
export class CargarProveedoresComponent implements OnInit {
  convertedJson!: string
  listareg: Proveedores[] = [];
  selectedCustomers: any[] = [];
  loading: boolean = false;
  Lusuario: usuario = {}
  nombre?: string
  constructor(private apiProceso: ProcesoService, private messageService: MessageService, public auth: AuthService) { }

  ngOnInit(): void {

    this.Lusuario = JSON.parse(this.auth.getUserInfo().user);
    this.nombre = this.Lusuario.usuario
  }



  //cargar data de excel 
  fileUploda(event: any) {
    this.loading = true

    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile)
    fileReader.onload = (evento) => {
      let binaryData = evento.target?.result;
      let workbook = XLSX.read(binaryData, { type: 'binary', cellDates: true, cellText: true, cellStyles: true });
      workbook.SheetNames.forEach(sheet => {
        this.loading = false;
        console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]))
        this.listareg = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);



      })
    }
  }


  guardar() {

    this.apiProceso.UploadProveedor(this.listareg, this.nombre).subscribe((resp: any) => {
      console.log(resp)
      this.messageService.add({ severity: resp.status, summary: "", detail: resp.Value });
    })

  }
}
