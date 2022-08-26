import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmService } from 'src/app/shared/services/adm.service';
import { Observable, map, shareReplay, tap } from 'rxjs';

@Component({
  selector: 'app-adm-nav',
  templateUrl: './adm-nav.component.html',
  styleUrls: ['./adm-nav.component.css']
})
export class AdmNavComponent implements OnInit {
  user?:any

  constructor(
    private breakpointObserver: BreakpointObserver,
    private adm : AdmService, 
    private router:Router,
    private afauth:AngularFireAuth,
    ) { }

 isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

logout(){
  this.adm.logout().then(()=>this.router.navigate(['']))
}

  ngOnInit(): void {
    this.afauth.authState.pipe(
      tap((user)=> this.user=user )).subscribe()
  }
}
