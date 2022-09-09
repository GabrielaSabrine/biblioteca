
import { Timestamp } from 'firebase/firestore';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './../shared/services/auth.service';
import { Validators, FormBuilder, FormControl, FormControlName } from '@angular/forms';
import { Subscription, tap, timestamp } from 'rxjs';
import { Login } from 'src/app/shared/models/login';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ToastrService } from 'ngx-toastr';
import { FormGroup} from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {


  tipo!:string;
  arrayimg?:any[];
  user?:any;
  sub?:Subscription;
  sub2?:Subscription;
  sub3?:Subscription;
  errorPassword=0;
  block=false;
  progresso1 = 0;
  auth: any;


  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
  

  ) {}
  

    image = [
      'https://http2.mlstatic.com/D_NQ_NP_646877-MLB32140972609_092019-O.jpg',
      'https://tm.ibxk.com.br/2021/06/17/17092631149025.jpg?ims=1120x420',
      'https://www.nespe.com.br/wp-content/uploads/2020/01/ocorvo-poe.jpg',
    ];

    cadastroForm = this.fb.group(
      {
        nome: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.minLength(8),Validators.required]],
        dataNasci: ['', [Validators.required]],
        nickName: [''],
        dataCad: [''],
      },
   
    );
 
    loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.minLength(8)]],
      }
   
    );

    progresso() {
    this.tipo='dark'
      this.progresso1 = 0;
      if (this.cadastroForm.get('nome')?.valid) this.progresso1 = this.progresso1 + 25;
      if (this.cadastroForm.get('email')?.valid)  this.progresso1 = this.progresso1+ 25;
      if (this.cadastroForm.get('senha')?.valid) this.progresso1 = this.progresso1+ 25;
      if (this.cadastroForm.get('dataNasci')?.valid)  this.progresso1 = this.progresso1 + 25;
  if(this.progresso1==100) this.tipo="success"
      return  this.progresso1;
    }
  ngOnInit() { }
  }
  

