import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


constructor(
  private breakpointObserver: BreakpointObserver,
  private adm : AdmService, 
    private router:Router,
    ) { }
logout(){
  this.adm.logout().then(()=>this.router.navigate(['']))
}
}
