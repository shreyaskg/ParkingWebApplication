import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResponsesService {
  Responses!:AngularFirestoreCollection<any>;
  constructor(firestore: AngularFirestore) {
    this.Responses = firestore.collection('Responses');

   }
  updateResponse(name:string, email:string, phonenumber:string, message:string) {
    this.Responses.add({
      Name:name,
      Email:email,
      PhoneNumber:phonenumber,
      Message:message
    });
    return;
  }
}
