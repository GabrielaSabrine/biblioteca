import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from "@angular/fire/compat/storage";
import { getApp } from "firebase/app";
import { AttFoto } from '../models/AttFoto';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AdmService {
  constructor(
    private db: AngularFirestore,
    public storage: AngularFireStorage,
    private afauth: AngularFireAuth,
    private http: HttpClient
  ) {}

  addFirestore(login: Login, string: string) {
    return this.db
      .collection('FotosLogin')
      .doc(string)
      .set({ ...login, uid: string });
  }
  attFotodb(uid: string, string: string) {
    return this.db.collection('Usuario').doc(uid).update({ photoURL: string });
  }
  getpic() {
    return this.db
      .collection('FotosLogin', (a) => a.orderBy('responsividade'))
      .valueChanges();
  }

  getUser() {
    return this.db.collection('Usuario').valueChanges();
  }

  deleteUser(data: User) {
    // let functions= getFunctions(getApp());
    this.db.collection('Usuario').doc(data.uid).delete();
    this.http
      .post('http://localhost:5001/biblioteca/us-central1/deleteUser', { data })
      .subscribe((a) => console.log('deu certo ' + a));
  }
  logout() {
    return this.afauth.signOut();
  }

  deletepic(uid: string) {
    return this.db.collection('FotoLogin').doc(uid).delete();
  }

  setAdmin(data: User) {
    // let functions= getFunctions(getApp());
    this.http
      .post('http://localhost:5001/biblioteca/us-central1/setAdmin', { data })
      .subscribe((a) => console.log('deu certo aqui ' + a.valueOf));
  }

  getToken(data: any) {
    // let functions= getFunctions(getApp());
    let resposta: any;
    return this.http.post(
      'http://localhost:5001/biblioteca/us-central1/getToken',
      { data }
    );
  }

  attFoto(data: AttFoto) {
    // let functions= getFunctions(getApp());
    return this.http.post(
      'http://localhost:5001/biblioteca/us-central1/updatefoto',
      { data }
    );
  }
}
