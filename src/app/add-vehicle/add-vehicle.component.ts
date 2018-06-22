import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FBVehicleService } from '../fbvehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  angForm: FormGroup;
  
  constructor(private vehicleService: FBVehicleService, private formBuilder: FormBuilder) { 
    this.createForm()
  }

  createForm() {
    this.angForm = this.formBuilder.group( {
      nickName: ['', Validators.required],
      vehicleName: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      fuelType: ['', Validators.required]
    });
  }

  ngOnInit() {
    
  }

  addVehicle(nickName, vehicleName, registrationNumber, fuelType) {
    const obj = {
      nickName: nickName,
      vehicleName: vehicleName,
      registrationNumber: registrationNumber,
      fuelType: fuelType
    };
    console.log("Form data");
    console.log(obj);
  }
}