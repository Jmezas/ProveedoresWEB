import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/Auth.Service';

interface car {
  usuario?: string;
  correo?: string; 
  nombre?: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  nombre?:string
  boxes: Array<any>
  ListArea: car[] = [];
  constructor(public auth:AuthService) { }
  
 
  ngOnInit(): void {
    
    this.ListArea.push(JSON.parse(this.auth.getUserInfo().user)); 
    
  }
 
}
