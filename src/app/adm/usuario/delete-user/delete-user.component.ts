import { Component, OnInit } from '@angular/core';

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
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private ref: MatDialogRef<UsuariosComponent>
  ) {}

  ngOnInit(): void {}
}