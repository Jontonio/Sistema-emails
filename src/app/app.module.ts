import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContenFormComponent } from './auth/conten-form/conten-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MypostsComponent } from './pages/myposts/myposts.component';
import { NewEmailComponent } from './pages/new-email/new-email.component';
import { MyFriendsComponent } from './pages/my-friends/my-friends.component';
import { SendEmailsComponent } from './pages/send-emails/send-emails.component';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './shared/home/home.component';
import { NgxWigModule } from 'ngx-wig';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ContenFormComponent,
    MypostsComponent,
    NewEmailComponent,
    MyFriendsComponent,
    SendEmailsComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWigModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
