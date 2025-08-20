import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any[]=[];
  constructor(private _vehiclesService:VehiclesService){    //_vehiclesService is a varaiable we can use any
    _vehiclesService.getVehicles().subscribe(
      (data:any)=>{ //data is a varaible we can use any
        console.log(data);
        this.vehicles=data;
        console.log("vehicle data:",this.vehicles);
      },(err:any)=>{   //err is a varaible we can use any
        alert("Internal Server Error");
      }
    )
  }

}
