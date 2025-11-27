import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehiclessService } from '../vehicless.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  vehicleForm:FormGroup=new FormGroup(
    {
      Vehicle:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel:new FormControl(),
      color:new FormControl(),
      image:new FormControl(),
      cost:new FormControl(),
      tyres:new FormControl(),

    }
    
  ) 
  id:string="";
  constructor(private vehicleSerice:VehiclessService, private activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;  //ActivatedRoute is to bring the address

        //api call to load the data
        vehicleSerice.getVehicle(data.id).subscribe(
          (data:any)=>{
            //patch vehicle data to the form
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  }
  Submit(){
    if(this.id){
      // for edit
  this.vehicleSerice.updateVehicle(this.vehicleForm.value, this.id).subscribe(
        (data:any)=>{
          alert("updated Successfuly!");
          this.vehicleForm.reset(); // reset is to clear the form after submission
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
}      
else{
  //  for create
  console.log(this.vehicleForm.value);
      this.vehicleSerice.createVehicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Created Successfuly!");
          this.vehicleForm.reset(); // reset is to clear the form after submission
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
}
 
    }
}
