import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  bank:any=[];
  constructor(private activatedRoute:ActivatedRoute, private bankService:BankService){
    activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);

        //api call to data
        bankService.getBank(data.id).subscribe(
          (data:any)=>{
            // alert("Working")
            this.bank=data;
          }
        )
      }
    )
  }

}
