import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {
    path:'usuario',
    component: NavbarUsuarioComponent ,
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
