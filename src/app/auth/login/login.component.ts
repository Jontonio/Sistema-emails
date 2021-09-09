import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/providers/auth.service';
import { ContenFormComponent } from '../conten-form/conten-form.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  //variables
  form     :FormGroup;
  msg      :string = '';
  showError:boolean = false;
  loadding :boolean = false;

  constructor(private dialog:MatDialog, 
              private fb:FormBuilder, 
              private _auth:AuthService,
              private dialogRef: MatDialogRef<ContenFormComponent>) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      email:['joseantoniorojas999@gmail.com', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    })
  }

  register(){
    this.dialog.open(RegisterComponent)
  }

  ingresar(){
    if(this.form.invalid){
      Object.keys(this.form.controls).forEach( inputs => {
        this.form.controls[inputs].markAllAsTouched()
      })
      return;
    }
    this.loadding = true;
    this._auth.singIn(this.form.value).subscribe( res => {
      setTimeout(() => this.loadding = false, 1000);
      this.dialogRef.close();
    }, err => { 
      this.message();
      this.loadding = false;
      this.msg = err.error.msg
    })
  }

  // validation methods
  get email(){
    return this.form.controls['email'];
  }
  get password(){
    return this.form.controls['password'];
  }

  message(){
    this.showError = true;
    setTimeout(() => this.showError = false, 1500);
  }


}
