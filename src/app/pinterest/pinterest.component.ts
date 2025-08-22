import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  pinteres:any[]=[];
    constructor( private pinter:PinterestService){   
    this.loadpinter();
      
    }
    loadpinter(){
    this.pinter.getpintere().subscribe(
      (data:any)=>{ 
        console.log(data);
        this.pinteres=data;
        console.log(this.pinteres);
      },(err:any)=>{   
        alert("Internal Server Error");
      }
    ) 
    }

}
function getpintere() {
  throw new Error('Function not implemented.');
}

