import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'adm',
    component:AdmComponent,
    canActivate:[LogadoGuard],
    children:[
      {
        path:'fotos-login',
        component:FotosLoginComponent
      },
      {
        path:'usuario',
        component:UsuariosComponent
      },
      {
        path:"perfil",
        component:PerfilLogadoComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
