import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent {
  bankForm:FormGroup=new FormGroup(
      {
        account_name:new FormControl(),
        available_balance:new FormControl(),
        account_number:new FormControl(),
        city:new FormControl(),
        profie_picture:new FormControl(),
        ifsc_code:new FormControl(),
        id:new FormControl(),
  
      }
    ) 
    id:string="";
    constructor(private bankService:BankService,private activatedRoute:ActivatedRoute){
      activatedRoute.params.subscribe(
        (data:any)=>{
          this.id= data.id;

          bankService.getBank(data.id).subscribe(
            (data:any)=>{
              this.bankForm.patchValue(data);
            }
          )
        }
      )

    }
  
     Submit(){
      if(this.id){
        this.bankService.updateBank(this.bankForm.value,this.id).subscribe(
        (data:any)=>{
          alert("Bank account added successfully")
          this.bankForm.reset();
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
      }
      else{
           this.bankService.createBank(this.bankForm.value).subscribe(
        (data:any)=>{
          alert("Bank account added successfully")
          this.bankForm.reset();
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
      }
      
     }
}
