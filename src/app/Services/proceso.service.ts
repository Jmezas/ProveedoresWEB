import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combo } from '../Models/combo';
import { environment } from '../../environments/environment'
import { Proveedores } from '../Models/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {

  constructor(private http: HttpClient) { }

  UploadProveedor(params: any, id: any) {
    return this.http.post(environment.URL + 'api/Procesos/uploadProveedor/' + id, params);
  }

  ListaProveedor(params: any) {
    return this.http.get<Proveedores>(environment.URL + 'api/Procesos/listaProveedores/' + params);
  }

  //cambiar contraseña
  UploadPassword(params: any) {
    return this.http.post(environment.URL + 'api/General/cambiarPassword', params);
  }

  enviarCorreo(params: any) {
    return this.http.post(environment.URL + 'api/General/enviarCorreo', params);
  }

  ListaMenu(params: any) {
    return this.http.get(environment.URL + 'api/Login/listMenu?usuario=' + params);
  }
}
