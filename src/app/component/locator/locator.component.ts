import { Component, OnInit } from '@angular/core';
import { parkingLot } from 'src/app/models/ParkingLot';
import { ParkingLotService } from 'src/app/shared/parking-lot.service';

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css']
})
export class LocatorComponent implements OnInit {
  ParkingLotList:any;
  constructor(private parkingService:ParkingLotService) { }

  ngOnInit(): void {
    this.parkingService.getParkingLots().subscribe(lots => {
      this.ParkingLotList = lots;
      console.log(lots);
    });
  }
}
