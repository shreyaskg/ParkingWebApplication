import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { parkingLot } from '../models/ParkingLot';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {
  lots:Observable<any[]>;
  constructor(firestore:AngularFirestore) {
    this.lots = firestore.collection('SlotInfo').valueChanges();
  }
  getParkingLots() {
    return this.lots;
  }
}
