import { DadosUserComponent } from './dados-user/dados-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { User } from 'src/app/shared/models/user';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { AdmService } from 'src/app/shared/services/adm.service';
import { Subscription, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios$?: any;
  token?: {};
  sub?: Subscription;

  constructor(
    private adm: AdmService,
    private ht: HotToastService,
    private dialog: MatDialog
  ) {}

  deleteUser(uid: User) {
    this.dialog
      .open(DeleteUserComponent, {
        width: '80%',
        height: '80%',
        data: {
          ...uid,
        },
      })
      .afterClosed()
      .subscribe((a) => {
        if (a) {
          this.ht.success('usuario deletado com sucesso');
          return this.adm.deleteUser(uid);
        }
        return console.log('tudo bem ');
      });
  }
  setAdmin(uid: User) {
    return this.adm.setAdmin(uid);
  }

  getToken(uid: User) {
    this.adm.getToken(uid).subscribe((a) => {
      this.token = a;
      this.dialog.open(DadosUserComponent, {
        width: '90%',
        height: '90%',
        data: { token: this.token },
      });
    });
  }

  ngOnInit(): void {
    this.sub = this.adm
      .getUser()
      .pipe(
        tap((resposta) => {
          this.usuarios$ = resposta;
          console.log(this.usuarios$);
        })
      )
      .subscribe();
  }
  ngOndestroy() {
    this.sub?.unsubscribe();
  }
}
