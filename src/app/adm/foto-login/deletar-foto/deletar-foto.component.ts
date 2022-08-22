import { UsuarioComponent } from './../../usuario/usuario.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Login } from 'src/app/shared/models/login';
import { Usuario } from 'src/app/shared/models/usuario';

@Component({
  selector: 'app-deletar-foto',
  templateUrl: './deletar-foto.component.html',
  styleUrls: ['./deletar-foto.component.css']
})
export class DeletarFotoComponent implements OnInit {
  clicarfechar(){
    this.ref.close()
      }
  clicardeletar(){
        this.ref.close(true)
          }
  constructor(@Inject(MAT_DIALOG_DATA) public data: Login, private ref: MatDialogRef<UsuarioComponent>) { }

  ngOnInit(): void {
  }

}