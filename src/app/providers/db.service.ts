import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Email } from '../models/email';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  url = 'http://localhost:7000/api';

  constructor(private http:HttpClient, private _msg: MatSnackBar) { }

  registerUser(data:User):Observable<User>{
    return this.http.post(`${this.url}/user/register`, data) as Observable<User>;
  }

  sendEmail(data:Email){
    return this.http.post(`${this.url}/email/sendEmail`, data);
  }

  message(msg:string){
    this._msg.open(msg,'Ok',{
      duration:2500,
      verticalPosition:'bottom',
      horizontalPosition:'center'
    })
  }


}
