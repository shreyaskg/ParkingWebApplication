import { Component, OnInit } from '@angular/core';
import { parkingLot } from 'src/app/models/ParkingLot';
import { ParkingLotService } from 'src/app/shared/parking-lot.service';
import { Loader } from '@googlemaps/js-api-loader';
import { VehicleService } from 'src/app/shared/vehicle.service';
@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css']
})
export class LocatorComponent implements OnInit {
  ParkingLotList:any;
  vehiclenumber!:string;
  phonenumber!:string;
  constructor(private parkingService:ParkingLotService, private vehicleService:VehicleService) { }

  ngOnInit(): void {

    let loader = new Loader({
      apiKey: 'AIzaSyADFXygGc0SwvJ3tZHBHvbxJ-cXuGZzFe4'
    })
    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map") as HTMLElement,{
        center: {lat:12.909477, lng:77.566833},
        zoom:17
      })
    })

    this.parkingService.getParkingLots().subscribe(lots => {
      this.ParkingLotList = lots;
      console.log(lots);
    });
  }
  bookSlot() {
    this.vehicleService.firestore.collection('VehicleInfo').add({
      VehicleNumber:this.vehiclenumber,
      PhoneNumber:this.phonenumber,
      Email:JSON.parse(localStorage.getItem('token') || '{}'),
      CheckIn: new Date(),
      CheckOut:0,
      Charges:0,
      LotId:"DSCE"
    })
    this.vehicleService.firestore.collection('ActiveVehicles').add({
      VehicleNumber:this.vehiclenumber,
      PhoneNumber:this.phonenumber,
      Email:JSON.parse(localStorage.getItem('token') || '{}'),
      CheckIn: new Date(),
      CheckOut:0,
      Charges:0,
      LotId:"DSCE"
    })
    const random_list = ['Slot1', 'Slot2', 'Slot3', 'Slot4', 'Slot5', 'Slot6']
    let random_number = Math.floor(Math.random() * 6);

    this.vehicleService.firestore.collection('SlotInfo').add()
    alert("Slot has been Allocated, your billing period starts from now")

  }
}
