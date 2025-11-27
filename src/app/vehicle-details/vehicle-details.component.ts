import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclessService } from '../vehicless.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  vehicle:any={};
  constructor(private activatedRoute:ActivatedRoute, private vehicleServicle:VehiclessService){
    activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);

        //api call to data load
        vehicleServicle.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
        )
      }
    )
  }

}
