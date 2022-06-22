import { Component, OnInit } from '@angular/core';
import { ResponsesService } from 'src/app/shared/responses.service';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import {Loader} from '@googlemaps/js-api-loader';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  FullNumber!:string;
  Name!:string;
  Email!:string;
  Message!:string;
  ResponsesService!:ResponsesService;

  constructor(firestore:AngularFirestore, ResponseService:ResponsesService) {
  }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: ''
    })
    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map") as HTMLElement,{
        center: {lat:12.909477, lng:77.566833},
        zoom:17
      })
    })
  }
  submitResponse() {
    this.ResponsesService.updateResponse(this.Name, this.Email, this.FullNumber, this.Message);
    alert('Submitted Response');
  }

}
