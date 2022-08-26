import { AdmNavComponent } from './adm-nav/adm-nav.component';
import { FotoLoginComponent } from './foto-login/foto-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmRoutingModule } from './adm-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { NgbOffcanvasModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { AdmComponent } from './adm.component';
import { FotoInteiraComponent } from './foto-login/foto-inteira/foto-inteira.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteUserComponent } from './usuario/delete-user/delete-user.component';
import { DadosUserComponent } from './usuario/dados-user/dados-user.component';
import { PerfilLogadoComponent } from './usuario/perfil-logado/perfil-logado.component';
import { DeletarFotoComponent } from './foto-login/deletar-foto/deletar-foto.component';


@NgModule({
  declarations: [
    FotoLoginComponent,
    FotoInteiraComponent,
    UsuarioComponent,
    DeleteUserComponent,
    DadosUserComponent,
    PerfilLogadoComponent,
    DeletarFotoComponent,
    AdmComponent,
    AdmNavComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbProgressbarModule,
    HttpClientModule,
    NgbOffcanvasModule
  ]
})
export class AdmModule { }
