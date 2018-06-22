import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IVehicle } from './vehicle';

@Injectable()
export class VehicleWebService {
   private _vehicleJSONurl='assets/vehicleData.json';
   constructor(private _http: Http){}
   
   getVehicleSummary(): Observable<IVehicle[]> {
      return this._http.get(this._vehicleJSONurl)
      .map((response: Response) => <IVehicle[]> response.json())
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
   }

   private handleError(error: Response) {
       console.error('Some Error: ' + error);
       return Observable.throw(error.json().error());
   }
}