import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/Models/Usuario';
import { AuthService } from 'src/app/Services/Auth.Service';
import { ProcesoService } from 'src/app/Services/proceso.service';
interface combo {
  name?: string
  code?: string
}
@Component({
  selector: 'app-segmentacion',
  templateUrl: './segmentacion.component.html',
  styleUrls: ['./segmentacion.component.scss']
})
export class SegmentacionComponent implements OnInit {
  listaToal: any[] = []
  loading: boolean = false;
  selectedCustomers: any[] = [];
  Lusuario: usuario = {}
  ListNodo: any[] = []
  listArray = ['0', '1', '2', '3', '4', '5']
  resultado: number = 0

  nivelSelect: combo = {}
  days: any[] = []

  ///prueba
  constructor(private api: ProcesoService, public auth: AuthService) { }


  ngOnInit(): void {
    this.listArray.forEach(element => {
      this.ListNodo.push({
        code: element,
        name: element
      })
    });

    this.Lusuario = JSON.parse(this.auth.getUserInfo().user);
    this.api.ListaProveedor(this.Lusuario.usuario).subscribe((resp: any) => {
      //console.log(resp)
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        this.nivelSelect = { code: resp[index]["nivel"], name: resp[index]["nivel"] }

        this.listaToal.push({
          id: resp[index]["id"],
          razon_social: resp[index]["razon_social"],
          nivel: resp[index]["nivel"],
          resultado: resp[index]["resultado"]
        })
        console.log(this.nivelSelect)
      }

      //this.listaToal = resp
      console.log(this.listaToal)
    })


  }

  enviar() {

  }
  nivel(event: any, costumer: any) {


    this.listaToal.forEach(bloque => {
      if (bloque.id == costumer.id) {
        console.log("entro")
        this.listaToal.map((x) => {
          x.resultado = x.resultado + parseInt(event.code)
        })
      }


    })

    this.resultado = this.resultado + parseInt(event.code)
  }

}
