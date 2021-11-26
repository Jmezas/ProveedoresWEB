import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth.Service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(){      
    if (this.auth.isLogged()) {
      console.log("true")
      return true;
    } else {
     return this.router.navigate(['/auth/login']);
    } 
  }
  
}
