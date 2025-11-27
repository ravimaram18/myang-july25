import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  public taskform:FormGroup=new FormGroup({


        name:new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10),Validators.pattern(/^[a-zA-Z ]+$/)]),
        salary : new FormControl("",[Validators.required,Validators.min(1000), Validators.max(1000000)]),
        
        company:new FormGroup({
          name:new FormControl("",[Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]),
          industry:new FormControl("",[Validators.required, Validators.minLength(3),Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]),
          size:new FormControl(),

  }),

     location:new FormGroup({
          city:new FormControl(),
          state:new FormControl(),
          country:new FormControl(),

  }),
  skills: new FormArray([]),
  hikes: new FormArray([]),
  workmode: new FormControl(),
  type: new FormControl(),

  });

  constructor(){
    this.taskform.get("type")?.valueChanges.subscribe(
      (data:any)=>{

        if(data==='fulltime'){
          this.taskform.addControl('healthinsuranceamount', new FormControl());
          this.taskform.removeControl('contractduration');
        }
        else{
          
          this.taskform.addControl('contractduration', new FormControl());
          this.taskform.removeControl('healthinsuranceamount');
        }
      }
    )
  }

  //SKILLS 
  get skillsFormArray(){
      return this.taskform.get('skills') as FormArray;
    }
  addskills(){
    this.skillsFormArray.push(
      new FormGroup({
        name: new FormControl(),
        level: new FormControl()
        
      })
    )
  }


  delete(i:number){
    this.skillsFormArray.removeAt(i);
  }

  //HIKES 
get hikesFormArray(){
      return this.taskform.get('hikes') as FormArray;
    }
  addhikes(){
    this.hikesFormArray.push(
      new FormGroup({
        year: new FormControl(),
        percentage: new FormControl()
        
      })
    )
  }
    remove(i:number){
    this.hikesFormArray.removeAt(i);
    }

  submit(){
    console.log(this.taskform.value);
    // alert('successfully submitted');
  }
}
