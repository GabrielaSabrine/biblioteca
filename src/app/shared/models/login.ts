import { Timestamp } from "firebase/firestore"

export interface Login {
    comentario:any,
    url:string,
    responsividade:any,
    dataCad?: Timestamp,
    uid?:string,
    email: any,
    senha: any,
}
