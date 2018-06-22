import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated'

@Injectable({
  providedIn: 'root'
})
export class FBVehicleService {

  private basePath = '/VehicleSummary';
  // public items: any;
  // public item: any;
  constructor(private db: AngularFireDatabase) { }

  addVehicle(data) {
    const obj = this.db.database.ref(this.basePath);
    // obj.push(data);
    console.log (" Data to be pushed : " + data);
  }
}
