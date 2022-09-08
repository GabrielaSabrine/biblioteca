
import { Timestamp } from "firebase/firestore"


export interface User {
    nome:string,
    nickName?:string,
    telefone?:string,
    email:string,
    senha:string,
    dataNasci: Timestamp,
    dataCad?: Timestamp,
    foto?:File,
    uid?:string,
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    // uid: string;
    // email: string;
    // displayName: string;
    // photoURL: string;
    // emailVerified: boolean;
}
