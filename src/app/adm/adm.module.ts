import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmRoutingModule } from './adm-routing.module';
import { AdmComponent } from './adm.component';
import { FotoLoginComponent } from './foto-login/foto-login.component';
import { FotoInteiraComponent } from './foto-login/foto-inteira/foto-inteira.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DadosUserComponent } from './usuario/dados-user/dados-user.component';
import { DeleteUserComponent } from './usuario/delete-user/delete-user.component';


@NgModule({
  declarations: [
    AdmComponent,
    FotoLoginComponent,
    FotoInteiraComponent,
    UsuarioComponent,
    DadosUserComponent,
    DeleteUserComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule
  ]
})
export class AdmModule { }
