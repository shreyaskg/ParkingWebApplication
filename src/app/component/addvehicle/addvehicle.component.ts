import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {
  vehiclenumber!:string;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

  }
}
