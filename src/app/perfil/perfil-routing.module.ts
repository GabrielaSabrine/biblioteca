import { LogadoGuard } from './../shared/guards/logado.guard';
import { FeedComponent } from './feed/feed.component';
import { NavUserComponent } from './nav-user/nav-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {
    path:'usuario',
    component: NavUserComponent ,
    canActivate:[LogadoGuard],
  children:[
    {
      path:'feed',
      component: FeedComponent
      
  }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
