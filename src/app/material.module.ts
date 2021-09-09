import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';


const material = [ MatToolbarModule,
                   MatIconModule,
                   MatButtonModule,
                   MatDialogModule,
                   MatTabsModule,
                   MatInputModule,
                   MatMenuModule,
                   MatSnackBarModule,
                   MatCardModule
                 ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material
  ],
  exports:[ ...material ]
})
export class MaterialModule { }
