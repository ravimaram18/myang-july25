import { Component } from '@angular/core';
import { FlipkartfakeService } from '../flipkartfake.service';

@Component({
  selector: 'app-flipkartfake',
  templateUrl: './flipkartfake.component.html',
  styleUrls: ['./flipkartfake.component.css']
})
export class FlipkartfakeComponent {
   flips:any[]=[];
    constructor(private _flipp:FlipkartfakeService){
    _flipp.getflip().subscribe(
      (app:any)=>{
        console.log(app);
        this.flips=app;
        console.log(this.flips);
      },(err:any)=>{
        alert("Internal Server error")
      }
    )
  }

}
