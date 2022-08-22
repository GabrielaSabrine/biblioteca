import { AuthRoutingModule } from './auth/auth-routing.module';
import { PerfilRoutingModule } from './perfil/perfil-routing.module';
import { AdmRoutingModule } from './adm/adm-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    AuthRoutingModule,
    PerfilRoutingModule,
    AdmRoutingModule],
  exports: [RouterModule],
   declarations: [
    
  ]
})
export class AppRoutingModule { }
