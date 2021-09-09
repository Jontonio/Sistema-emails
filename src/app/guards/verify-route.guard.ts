import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyRouteGuard implements CanActivate {
  constructor(private _auth:AuthService, private http:HttpClient){

  }
  canActivate(): Promise<boolean>{
    // creamos un promise
    return new Promise((resolve, reject) => {
      // cargamos el payload
      const payload = { 'x-token':JSON.parse(localStorage.getItem('token') || '') as string }
      // ejecutamos la petición
      this.http.get(`${this._auth.url}/auth/isActive`,{ headers: payload })
                 .subscribe( res => {
                    resolve(true);
                 }, err => { 
                  this._auth.logout();
                  reject(false);
                 });
    })
  }

}
