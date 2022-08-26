import { shareReplay, Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { AdmService } from 'src/app/shared/services/adm.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  isHandset$: Observable<boolean> = this.BreakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


constructor(
  private BreakpointObserver: BreakpointObserver,
  private adm : AdmService, 
    private router:Router,
    ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
logout(){
  this.adm.logout().then(()=>this.router.navigate(['']))
}
}
