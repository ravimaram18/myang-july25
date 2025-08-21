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
    this.loadVehicles();
  }
  loadVehicles(){
    this._vehiclesService.getVehicles().subscribe(
      (data:any)=>{ //data is a varaible we can use any
        console.log(data);
        this.vehicles=data;
        console.log("vehicle data:",this.vehicles);
      },(err:any)=>{   //err is a varaible we can use any
        alert("Internal Server Error");
      }
    )
  }
 delete(id:any){
      if(confirm("Are You Sure, You Want to Delete it?")==true){
        this._vehiclesService.deleteVehicles(id).subscribe(
       (data:any)=>{
        alert("Record Successfully Deleted")
       },(err:any)=>{
        alert("Internal Server Error!")
       }
      )
      this.loadVehicles();

      }else{
        alert("You Have Cancelled the Request")
      }
    }

  searchkeyword:string='';
  search(){
    this._vehiclesService.getfilteredVehicles(this.searchkeyword).subscribe(
      (data:any)=>{ //data is a varaible we can use any
        console.log(data);
        this.vehicles=data;
        // console.log("vehicle data:",this.vehicles);
      },(err:any)=>{   //err is a varaible we can use any
        alert("Internal Server Error");
      }
    )
  }
  columnName:string='';
  sortOrder:string='';
  sort(){
    this._vehiclesService.getsorteredVehicles(this.columnName,this.sortOrder).subscribe(
      (data:any)=>{ //data is a varaible we can use any
        console.log(data);
        this.vehicles=data;
        // console.log("vehicle data:",this.vehicles);
      },(err:any)=>{   //err is a varaible we can use any
        alert("Internal Server Error");
      }
    )
  }
  items:number=0;
  pageNumber:number=0;
  pagination(){
    this._vehiclesService.getpaginatedVehicles(this.items,this.pageNumber).subscribe(
      (data:any)=>{ //data is a varaible we can use any
        console.log(data);
        this.vehicles=data;
        // console.log("vehicle data:",this.vehicles);
      },(err:any)=>{   //err is a varaible we can use any
        alert("Internal Server Error");
      }
    )
    }
    

}
