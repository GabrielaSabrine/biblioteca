import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user';
import { UsuarioComponent } from '../usuario.component';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  clicarfechar() {
    this.ref.close();
  }
  clicardeletar() {
    this.ref.close(true);
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private ref: MatDialogRef<UsuarioComponent>
  ) {}

  ngOnInit(): void {}
}