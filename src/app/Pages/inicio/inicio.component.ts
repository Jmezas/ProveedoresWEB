import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/Auth.Service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  nombre?:string
  boxes: Array<number> = new Array(24);
  constructor(public auth:AuthService) { }
  
 
  ngOnInit(): void {
    this.nombre= JSON.parse(this.auth.getUserInfo().user)
    console.log(this.nombre)
  }
 
}
