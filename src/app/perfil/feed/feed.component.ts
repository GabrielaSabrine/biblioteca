import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  usuario?:any


  constructor(private afauth: AngularFireAuth, private router:Router) { }

  ngOnInit() {
    this.afauth.authState.pipe(
      tap(
        (resultado)=>{
           if(resultado){
            this.usuario=resultado
            console.log("caiu aqui")
           }else{
            this.afauth.signOut().then(
              a=> this.router.navigate([''])
            )
           }

        } 

      )
    ).subscribe()
  }

}
