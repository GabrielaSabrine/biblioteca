import { AttFoto } from './../../../shared/models/AttFoto';
import { FotoLoginComponent } from './../../foto-login/foto-login.component';
import { AdmService } from 'src/app/shared/services/adm.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Userasync } from 'src/app/shared/models/userasync';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dados-user',
  templateUrl: './dados-user.component.html',
  styleUrls: ['./dados-user.component.css'],
})
export class DadosUserComponent implements OnInit {
  data2?:Userasync
  imagem?:SafeUrl
  data3?:{}
  constructor(private adm:AdmService
    ,@Inject(MAT_DIALOG_DATA) public data: any,private ref: MatDialogRef<FotoLoginComponent>, private sanitizer: DomSanitizer) {}
  clicarfechar(){
this.ref.close()
  }
  
editarFoto(data:any,){
  this.adm.attFoto(data).subscribe()

}

  ngOnInit(): void {
this.data2=this.data.token.result
this.imagem= this.sanitizer.bypassSecurityTrustUrl(this.data2?.photoURL!)
this.data3={
  uid: this.data2?.uid,
  photoURL:"https://vidasimples.co/wp-content/uploads/2019/02/alfons-morales-YLSwjSy7stw-unsplash-1160x523.jpg"
}
console.log(this.data.token.result)
  }


}
