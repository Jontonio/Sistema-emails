import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyRouteGuard } from './guards/verify-route.guard';
import { MainComponent } from './pages/main/main.component';
import { MyFriendsComponent } from './pages/my-friends/my-friends.component';
import { MypostsComponent } from './pages/myposts/myposts.component';
import { NewEmailComponent } from './pages/new-email/new-email.component';
import { SendEmailsComponent } from './pages/send-emails/send-emails.component';

const routes: Routes = [
  { path:'main', component:MainComponent, 
    children:[
      { path:'my-posts', component:MypostsComponent, canActivate:[VerifyRouteGuard] },
      { path:'new-email', component:NewEmailComponent, canActivate:[VerifyRouteGuard] },
      { path:'sends-email', component:SendEmailsComponent, canActivate:[VerifyRouteGuard] },
      { path:'my-friends', component:MyFriendsComponent, canActivate:[VerifyRouteGuard] },
    ] 
  },
  { path:'**', pathMatch:'full', redirectTo:'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
