import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  banks:any=[];
  
  constructor(private bankServices:BankService){
    bankServices.getBanks().subscribe(
      (data:any)=>{
        this.banks=data
        console.log(this.banks)
        // alert('hgfghhg')
      },
    
      (error:any)=>{
        alert("Internal Server Error");
      }
    )

    
  }
  id:string=" ";
  deletebank(id:string){
    this.bankServices.deleteBanks(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully");
         location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

}
