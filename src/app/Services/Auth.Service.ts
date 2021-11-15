import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../environments/environment.prod'
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //urlbase:"http://127.0.0.1:8083/bpcm-rest/"
  validarUsuario(params : any){
    // return this.http.post('https://localhost:44362/api/pep/ValidacionUsuario' ,params);
    return this.http.post(environment.URL+'api/Login/ValidacionUsuario' ,params);
  }

  constructor(private http : HttpClient) { }
}
