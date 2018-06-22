import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleSummaryComponent } from './vehicle-summary/vehicle-summary.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
  // {path: 'app-add-vehicle', component: AddVehicleComponent},
  // {path: 'app-vehicle-summary', component: VehicleSummaryComponent}
  {path: 'AddVehicle', component: AddVehicleComponent},
  {path: 'VehicleSummary', component: VehicleSummaryComponent},
  {path: '', redirectTo: '/VehicleSummary', pathMatch: 'full'}
  // ,
  // {path: '', component: PageNotFoundComponent} //To create
]

@NgModule({
  declarations: [
    AppComponent,
    AddVehicleComponent,
    VehicleSummaryComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
