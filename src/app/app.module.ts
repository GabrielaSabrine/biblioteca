import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeitorComponent } from './leitor/leitor.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ComponentComponent } from './component/component.component';

@NgModule({
  declarations: [	
    AppComponent,
    LeitorComponent,
    LoginComponent,
    CadastroComponent,
      ComponentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
