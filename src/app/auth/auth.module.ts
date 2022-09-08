import { AuthService } from './../shared/services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbDatepickerModule, NgbProgressbar, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AuthComponent,
 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgbProgressbarModule,
    NgbDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,

    ],
  providers: [AuthService],
  bootstrap: [NgbProgressbar]
})

export class AuthModule { }
