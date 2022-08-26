import { PerfilLogadoComponent } from './usuario/perfil-logado/perfil-logado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FotoLoginComponent } from './foto-login/foto-login.component';
import { LogadoGuard } from './../shared/guards/logado.guard';
import { AdmComponent } from './adm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'adm',
    component:AdmComponent,
    canActivate:[LogadoGuard],
    children:[
      {
        path:'foto-login',
        component:FotoLoginComponent
      },
      {
        path:'usuario',
        component:UsuarioComponent
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
