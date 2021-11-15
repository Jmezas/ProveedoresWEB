import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  boxes: Array<number> = new Array(24);
  constructor() { }

  ngOnInit(): void {
  }

}
