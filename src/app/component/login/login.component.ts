import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { VehicleService } from 'src/app/shared/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';
  VehicleList:any;
  activeVehiclesList:any;
  Credentials:any;
  vehiclenumber!:string;
  phonenumber!:number;
  constructor(private auth : AuthService, private VehicleService: VehicleService, private router:Router) { }

  ngOnInit(): void {

  }
  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }
    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';
    this.Credentials = localStorage.getItem('token');
  }

  signInWithGoogle() {
    this.auth.googleSignIn();
    this.Credentials = localStorage.getItem('token')
    this.getVehicles();
  }
  logOut() {

    this.auth.logout;
    this.router.navigate(['homepage']);
    alert('LoggedOut');
  }
  getVehicles() {
    this.VehicleService.getVehicles().subscribe(vehicles => {
      this.VehicleList = vehicles;
    });
  }
  getActiveVehicles() {
    this.VehicleService.getActiveVehicles().subscribe(vehicles => {
      this.VehicleList = vehicles;
    })
  }
  onSubmit() {
    this.VehicleService.addVehicle(this.phonenumber, this.vehiclenumber,);
    this.vehiclenumber = '';
    this.phonenumber = 0;
    alert("Vehicle Successfully added!")
  }
}
