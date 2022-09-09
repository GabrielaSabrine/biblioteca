import { AuthGuard } from './shared/guards/auth.guard';
import { NavUserComponent } from './perfil/nav-user/nav-user.component';
import { AdmComponent } from './adm/adm.component';
import { LogadoGuard } from './shared/guards/logado.guard';
import { FotoLoginComponent } from './adm/foto-login/foto-login.component';
import { UsuarioComponent } from './adm/usuario/usuario.component';
import { PerfilLogadoComponent } from './adm/usuario/perfil-logado/perfil-logado.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmRoutingModule } from './adm/adm-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PerfilRoutingModule } from './perfil/perfil-routing.module';
const routes: Routes = [
  {
    path:'',redirectTo: "/auth", pathMatch: "full",
    component:AuthComponent,
  },
  {
    path:'auth',
    component:AuthComponent,
  },
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
  },
  {
    path:'usuario',
    component: NavUserComponent ,
    canActivate:[LogadoGuard],

  },
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
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PerfilRoutingModule,
    AdmRoutingModule,
    
  ],

  exports: [RouterModule],
})
export class AppRoutingModule { }
