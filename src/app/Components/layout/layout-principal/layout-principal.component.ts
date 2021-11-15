import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/Services/config.service';

@Component({
  selector: 'app-layout-principal',
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.css']
})
export class LayoutPrincipalComponent implements OnInit {
  pbConfig: any;
  openSidebar: boolean = true;
  isModal: boolean = false;

  toggleSidebar(): void {
    this.openSidebar = !this.openSidebar;
  }

  constructor(public _configService: ConfigService) {
    this._configService.config = {
      useLayout: true
    };
  }

  ngOnInit(): void {
    this._configService.config.subscribe((config: any) => {
      this.pbConfig = config;
    });
  }

}
