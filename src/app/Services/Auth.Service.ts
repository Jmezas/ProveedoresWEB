import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  validarUsuario(params: any) {
    // return this.http.post('https://localhost:44362/api/pep/ValidacionUsuario' ,params);
    return this.http.post(environment.URL + 'api/Login/ValidacionUsuario', params);
  }

  constructor(private http: HttpClient, private router: Router) {


  }

  saveToken(token: string) {

    localStorage.setItem('ACCESS_TOKEN', token);
    this.token = token;
  }

  getToken() {
    if (!this.token) {
      return localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }

  logOut() {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    this.router.navigateByUrl('/auth/login');
  }

  getUserInfo() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      // return JSON.parse(window.atob(payload));
      return JSON.parse(decodeURIComponent(escape(window.atob(payload))));
    } else {
      return null;
    }
  }

  isLogged() {
    const user = this.getUserInfo();
    return user ? user.exp > Date.now() / 1000 : false;
  }

  returnToken() {
    return this.isLogged() ? this.getToken() : null;
  }



  request(user: any) {
    //const headers = new HttpHeaders({ accept: 'application/json', 'Content-Type': 'application/json', });
    return this.http.post(environment.URL + 'api/Login/ValidacionUsuario', user).pipe(map((res: any) => {
      if (res.response) {
        // const token = JSON.parse(window.atob(res.auth.split('.')[1]));
        // if (token.user.role === 'ADMIN' || token.user.role === 'CREATOR') {
        //   this.saveToken(res.auth);
        // } else {
        //   const error = { error: '0007', message: 'Insufficient Permissions', statusCode: 401 };
        //   throw new HttpErrorResponse({ error, status: 401, statusText: 'Unauthorized' });
        // }
        this.saveToken(res.response);
      }
      return res;
    }));
  }

  login(user: any) {
    return this.request(user);
  }

  Validtoken(params: any) {
    return this.http.post(environment.URL + 'api/General/validarToken', params)
  }


  isLoggedToken(params: any) {


    const validarToken = this.Validtoken(params).subscribe((res: any) => {
      console.log(res)
    });
    return validarToken;
  }

}
