import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { capgeminiEmail } from '../custom-validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public userform:FormGroup=new FormGroup({
     
    name:new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10),Validators.pattern(/^[a-zA-Z ]+$/)]),
    age : new FormControl("", [Validators.required, Validators.min(0), Validators.max(100)]),
    email :new FormControl( "", [Validators.required, Validators.email, capgeminiEmail]),
    password: new FormControl( "", [Validators.required,Validators.pattern( /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d)(?=[^!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`]*[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`]).{8,}$/ )] ),
    address:new FormGroup({
      city:new FormControl( "", [Validators.required, Validators.minLength(3)]),
      pin:new FormControl( "", [Validators.required, Validators.min(100000), Validators.max(999999)]),
    }),
    cards: new FormArray([]),
    type: new FormControl(),
    // busFee: new FormControl(),
    // hostelFee: new FormControl()
  });

  constructor(){
    this.userform.get("type")?.valueChanges.subscribe(
      (data:any)=>{

        if(data==='dayScholor'){
          this.userform.addControl('bussFee', new FormControl( "", [Validators.required, Validators.min(100)]));
          this.userform.removeControl('hostelFee');
        }
        else{
          
          this.userform.addControl('hostelFee', new FormControl());
          this.userform.removeControl('bussFee');
        }
      }
    )
  }
  get cardsFormArray(){
    return this.userform.get('cards') as FormArray;
  }
  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl("", [Validators.required, Validators.min(100), Validators.max(999)] )
      })
    )
  }
  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }
  submit(){
    console.log(this.userform.value);
  }
}




