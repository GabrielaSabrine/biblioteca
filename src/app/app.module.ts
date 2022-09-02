import { GoogleAuthProvider } from 'firebase/auth';
import { AdmComponent } from './adm/adm.component';
import { PerfilLogadoComponent } from './adm/usuario/perfil-logado/perfil-logado.component';
import { AdmModule } from './adm/adm.module';
import { PerfilModule } from './perfil/perfil.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/material/material.module';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbModule,
  NgbOffcanvasModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HotToastModule } from '@ngneat/hot-toast';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AuthModule,
    CoreModule,
    PerfilModule,
    AdmModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HotToastModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    PerfilModule,
    NgbCarouselModule,
    NgbOffcanvasModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    // NgxMaskModule.forRoot()
  ],
  providers: [NgbCarousel,  GoogleAuthProvider,],
  bootstrap: [AppComponent],
})
export class AppModule {}
