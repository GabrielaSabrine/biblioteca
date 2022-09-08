import { AdminGuard } from './shared/guards/admin.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdmComponent } from './adm/adm.component';
import { UsuarioComponent } from './adm/usuario/usuario.component';
import { AuthComponent } from './auth/auth.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PerfilRoutingModule } from './perfil/perfil-routing.module';
import { AdmRoutingModule } from './adm/adm-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'login', component: AuthComponent },
  { path: 'Usuario', component: UsuarioComponent },
  { path: 'Adm', component: AdmComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
];

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
