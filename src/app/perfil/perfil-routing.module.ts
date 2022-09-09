import { LogadoGuard } from './../shared/guards/logado.guard';
import { NavUserComponent } from './nav-user/nav-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {
    path:'usuario',
    component: NavUserComponent ,
    canActivate:[LogadoGuard],
 

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
