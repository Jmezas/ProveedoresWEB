import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.scss']
})
export class MensajeriaComponent implements OnInit {
  emcabezado:string=''
  mensaje:string=''
  dias:string=''
  depsedida:string=''
  cancatenacion:string=''


  constructor() { }

  ngOnInit(): void {
 
  }

  concatCabecera(evento:any){

    this.cancatenacion= `${evento}  ${this.mensaje}  ${this.dias}  ${this.depsedida}` 
  }

  concatMensaje(evento:any){
    this.cancatenacion= `${this.emcabezado}  ${evento}  ${this.dias}  ${this.depsedida}` 
  }

  concatDias(evento:any){
    this.cancatenacion= `${this.emcabezado}  ${this.mensaje}  ${evento} dias  ${this.depsedida}` 
  }

  concatDespedida(evento:any){
    this.cancatenacion= `${this.emcabezado}  ${this.mensaje}  ${this.dias} dias  ${evento}` 
  }





}
