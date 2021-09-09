import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContenFormComponent } from 'src/app/auth/conten-form/conten-form.component';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog:MatDialog, public _auth:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.dialog.open(ContenFormComponent)
  }

}
