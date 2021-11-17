import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { LoadingComponent } from 'src/app/Components/loading/loading.component';
import { LoginRequest } from 'src/app/Models/LoginRequest';
import { AuthService } from 'src/app/Services/Auth.Service';
import { ConfigService } from 'src/app/Services/config.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  paramsLogin: LoginRequest = new LoginRequest();
  verPassword: boolean = false;
  btnShowverLogin: boolean = false;
  imagenFondo: string = '';
  constructor(
    private _configService: ConfigService
    , private messageService: MessageService
    , private service: AuthService
    , private dialog: MatDialog
    , private router: Router
  ) { }

  ngOnInit(): void {
  }

  validarUsuario() {
    //this.dialog.open(LoadingComponent,{ disableClose: true });
    this.service.login(this.paramsLogin).subscribe((response: any) => { 
      this.router.navigateByUrl('/auth/inicio'); 
      /*
            if(response.Value =="1"){
              this.messageService.add({severity:"info", summary: "", detail: "Ingreso correctamente las credenciales"});
              
              this.router.navigateByUrl('/auth/inicio');
      
            }else{
              this.messageService.add({severity:"warn", summary: "", detail: "Usuario o clave Incorecta"});
            }
         */

    },
      (error) => {

        this.messageService.add({ severity: "info", summary: "", detail: "sin permisos" });
      });
  }


}
