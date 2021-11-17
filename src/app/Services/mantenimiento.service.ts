import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combo } from '../Models/combo'; 
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  constructor(private http: HttpClient) { }

  CreateGrupo(params: any) {
    return this.http.post(environment.URL +'api/Mantenimiento/grupo', params);
  }

  CreateCategoria(params: any) {
    return this.http.post(environment.URL +'api/Mantenimiento/categoria', params);
  }
  
  CreateArea(params: any) {
    return this.http.post(environment.URL +'api/Mantenimiento/area', params);
  }
  CreateEstado(params: any) {
    return this.http.post(environment.URL +'api/Mantenimiento/estado', params);
  }
  CreateUsuario(params: any) {
    return this.http.post(environment.URL +'api/Mantenimiento/usuario', params);
  }
  CreateEvaluacion(params: any) {
    return this.http.post(environment.URL +'api/Mantenimiento/evaluacion', params);
  }
  GetCombo(params: any) {
    console.log(params)
    return this.http.get<combo[]>(environment.URL +'api/General/combo/'+ params);

  }

  CreatePerfil(params: any) {
    return this.http.post(environment.URL +'api/Mantenimiento/perfil', params);
  }
}
