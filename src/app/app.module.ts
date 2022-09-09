import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './shared/services/auth.service';
import { HttpService } from './shared/services/Http.service';
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
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
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
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { DashboardComponent } from './dashboard/dashboard.component';



const firebaseConfig = {
  apiKey: "AIzaSyBjtFUKD-CT1TQDYhVIpT01lO1YBMbgbq8",
  authDomain: "biblioteca-3006d.firebaseapp.com",
  projectId: "biblioteca-3006d",
  storageBucket: "biblioteca-3006d.appspot.com",
  messagingSenderId: "95417983188",
  appId: "1:95417983188:web:4ef6caa5023b5d10135b41",
  measurementId: "G-J32J6ZEFMZ"
};


@NgModule({
  declarations: [AppComponent, DashboardComponent],
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
    AngularFireAuthModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    ToastrModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AdmModule, 
    

   
  ],
  providers: [NgbCarousel,  GoogleAuthProvider, HttpService, AuthService, AngularFireModule, AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
