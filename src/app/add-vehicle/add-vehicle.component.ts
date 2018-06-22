import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FBVehicleService } from '../fbvehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  addVehicleForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
    this.createForm()
  }

  createForm() {
    this.addVehicleForm = this.formBuilder.group( {
      nickName: ['', Validators.required],
      // nickName: new FormControl('', Validators.compose([
      //   Validators.required
      // ])),

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