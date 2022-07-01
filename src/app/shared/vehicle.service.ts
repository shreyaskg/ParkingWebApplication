import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Vehicle } from '../models/vehicle';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  allvehicles:Observable<any[]>;
  activevehicles:Observable<any[]>;
  vehicleCollection!: any;
  activeVehicleCollection!:any;
  queryresult:any;
  constructor(public firestore : AngularFirestore) {
    this.vehicleCollection = this.firestore;
    // https://stackoverflow.com/questions/46915002/argument-of-type-string-null-is-not-assignable-to-parameter-of-type-string
    this.allvehicles = firestore.collection('ActiveVehicles', ref => ref.where('Email', '==', JSON.parse(localStorage.getItem('token') || '{}'))).valueChanges();
    this.activevehicles = firestore.collection('VehicleInfo', ref => ref.where('Email', '==', JSON.parse(localStorage.getItem('token') || '{}'))).valueChanges();
  }

  getVehicles() {
    return this.allvehicles;
  }
  getActiveVehicles() {
    return this.activevehicles
  }
  addVehicle(phonenumber:number, vehiclenumber:string) {
    // Add vehicle info to both the active collection and vehicleInfo which will include all the logs
    // if (true) {
    //   this.vehicleCollection.collection('ActiveVehicles').where('VehicleNumber','==',vehiclenumber).get().then((querySnapshot) =>
    //   {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });
    // }
    // else {}
    this.vehicleCollection.collection('ActiveVehicles').add({
      VehicleNumber:vehiclenumber,
      PhoneNumber:phonenumber,
      Email:JSON.parse(localStorage.getItem('token') || '{}'),
      CheckIn: new Date(),
      CheckOut:0,
      Charges:0,
      LotId:"DSCE"
    });
    this.vehicleCollection.collection('VehicleInfo').add({
      VehicleNumber:vehiclenumber,
      PhoneNumber:phonenumber,
      Email:JSON.parse(localStorage.getItem('token') || '{}'),
      CheckIn: new Date(),
      CheckOut:0,
      Charges:0,
      LotId:"DSCE"
    });
  }
  }

