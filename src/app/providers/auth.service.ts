import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../models/Auth';
import { userActive } from '../models/userActive';
import { map } from 'rxjs/operators'
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:7000/api';
  userActive = new userActive();
  isActiveUser:boolean = false;
  token:string = '';
  msgloadding: string = 'Cargando...';

  constructor(private http:HttpClient, private ruta:Router, private _sp:NgxSpinnerService) {
    this.readToken();
  }

  singIn(data:Auth){
    return this.http.post(`${this.url}/auth/login`,data)
          .pipe( 
            map( resp => {
              this.saveToken(resp as userActive)
              return resp;
            })
          )
  }

  logout(){
    this._sp.show();
    this.msgloadding = 'Cerrando sesión'
    setTimeout(() => {
      this._sp.hide() 
      localStorage.removeItem('token');
      this.isActiveUser = false;
      this.msgloadding = 'Cargando...'
      this.ruta.navigateByUrl('/main');
    }, 1000);
  }

  saveToken(data:userActive){
    this.userActive = data;
    this.isActiveUser = true;
    localStorage.setItem('token',JSON.stringify(data.token));
    this.ruta.navigateByUrl('main/my-posts');
  }

  readToken(){
    // leemos el localstorage
    this._sp.show();
    if(localStorage.getItem('token')){
      // asignamos el valor recuperado
      this.token = JSON.parse(localStorage.getItem('token') || '');
      // verificar el token del usuario
      this.statusUser(this.token).then( res => {
        this.isActiveUser = true;
        console.log('usuario verificado')
        this._sp.hide(); 
      }).catch( err =>{
        // cerrar sesión si token es alterado
        this.logout()
      });

    }else{
      this.token = ''
      this.isActiveUser = false;
      setTimeout(() => this._sp.hide() , 1000);
    }
  }

  async statusUser(token:string):Promise<boolean>{
    // creamos un promise
    return new Promise((resolve, reject) => {
      // cargamos el payload
      const payload = { 'x-token':token }
      // ejecutamos la petición
      this.http.get(`${this.url}/auth/isActive`,{ headers: payload })
                 .subscribe( res => {
                    this.userActive = res as userActive;
                    resolve(true);
                 }, err => reject(false) );
    })
  }

}
