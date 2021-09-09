import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbService } from 'src/app/providers/db.service';

@Component({
  selector: 'app-new-email',
  templateUrl: './new-email.component.html',
  styleUrls: ['./new-email.component.scss']
})
export class NewEmailComponent implements OnInit {

  text:string = ''
  hide:boolean = true;
  loadding:boolean = false;

  form:FormGroup
  constructor(private fb:FormBuilder, private _db:DbService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){

    this.form = this.fb.group({
      email:['joseantoniorojas999@gmail.com', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      to:['joseantoniorsystem@gmail.com', Validators.required],
      subject:['Reunión de urgencia', Validators.required],
      html:['', [Validators.required]]
    })

  }

  get email(){
    return this.form.controls['email'];
  }
  get to(){
    return this.form.controls['to'];
  }
  get subject(){
    return this.form.controls['subject'];
  }
  get password(){
    return this.form.controls['password'];
  }

  send(){
    if(this.form.invalid){
      Object.keys(this.form.controls).forEach( inputs => {
        this.form.controls[inputs].markAllAsTouched()
      })
      return;
    }
    this.loadding = true;
    this._db.sendEmail(this.form.value).subscribe( res => {
      this._db.message('Mensaje enviado correctamente')
      this.form.reset();
      this.loadding = false;
    }, err => {
      this.loadding = false;
      this._db.message('Error al enviar el mensaje')
      console.log(err)
    })
  }

}
