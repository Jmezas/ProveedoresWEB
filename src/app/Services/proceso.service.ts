import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combo } from '../Models/combo'; 
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {

  constructor(private http: HttpClient) { }

  UploadProveedor(params: any) {
    return this.http.post(environment.URL +'api/Procesos/uploadProveedor', params);
  }

  //cambiar contraseña
  UploadPassword(params: any) {
    return this.http.post(environment.URL +'api/General/cambiarPassword', params);
  }

  enviarCorreo(params: any){
    return this.http.post(environment.URL +'api/General/enviarCorreo', params);
  }
}
