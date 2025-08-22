import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  public vehicleForm:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    cost:new FormControl(),
    tyres:new FormControl(),
  });
  constructor(private _vehicleService:VehiclesService, private _router:Router){} //_router is a varaible we can take any name
  submit(){
    console.log(this.vehicleForm.value);
    
    this._vehicleService.createVehicles(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Vehicle added Successfully");
        this._router.navigateByUrl("/dashboard/vehicles")
      },(error:any)=>{
        alert("Internal Server Error!");
      }
    )
  }

}
