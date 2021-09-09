import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { userActive } from 'src/app/models/userActive';
import { AuthService } from 'src/app/providers/auth.service';
import { DbService } from 'src/app/providers/db.service';
import { ContenFormComponent } from '../conten-form/conten-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;
  loadding:boolean = false;
  showError:boolean = false;
  msg:string = '';

  constructor(private fb:FormBuilder, 
              private _db:DbService,
              private _auth:AuthService,
              private dialogRef: MatDialogRef<ContenFormComponent>) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form = this.fb.group({
      name:['', [Validators.required]],
      last_name:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }

  // get methods
  get name(){
    return this.form.controls['name'];
  }
  get last_name(){
    return this.form.controls['last_name'];
  }
  get email(){
    return this.form.controls['email'];
  }
  get password(){
    return this.form.controls['password'];
  }

  register(){

    if(this.form.invalid){
      Object.keys(this.form.controls).forEach( inputs => {
        this.form.controls[inputs].markAllAsTouched()
      })
      return;
    }

    this._db.registerUser(this.form.value).subscribe( res => {
      this._auth.saveToken(res as any)
      this.dialogRef.close();
    }, err => {
      this.showError = true;
      setTimeout(() => this.showError = false , 1500);
      console.log(err) 
      this.msg = err.error.Error;
    })
  }

}
