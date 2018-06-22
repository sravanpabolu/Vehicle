import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

//Import vehicle service, interface
import { VehicleWebService } from '../vehicle.service'
import { IVehicle } from '../vehicle'

@Component({
  selector: 'app-vehicle-summary',
  templateUrl: './vehicle-summary.component.html',
  styleUrls: ['./vehicle-summary.component.css'],
  providers: [VehicleWebService]
})

export class VehicleSummaryComponent implements OnInit {
  
  iVehicles: IVehicle[];

  constructor(private _vehicle: VehicleWebService) { }

  ngOnInit() {
    // console.log('Vehicle Data: ' + this._vehicle.getVehicleSummary().subscribe(iVehicles => this.iVehicles = iVehicles))
    this._vehicle.getVehicleSummary().subscribe(iVehicles => this.iVehicles = iVehicles);
  }

  // vehicleData: any[] = this.iVehicles


  vehicleData: any[] = [ 
    {
      'nickName' : 'pulsar',
      'name' : 'Bajaj Pulsar 180',
      'fuelType' : 'Petrol',
      'registrationNumber' : 'TN10X6622'
    },
    {
      'nickName': 'activa',
      'name' : 'Honda Activa 110',
      'fuelType' : 'Petrol',
      'registrationNumber': 'TN11X2266'
    },
    {
      'nickName': 'swift',
      'name' : 'Maruthi Swift VXI',
      'fuelType' : 'Petrol',
      'registrationNumber': 'TN10AU2662'
    }
  ];

  

  
}
