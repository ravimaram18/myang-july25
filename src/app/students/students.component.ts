import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  student:any[]=[];
  constructor(private _stu:StudentsService){    
      _stu.getstudents().subscribe(
        (data:any)=>{ 
          console.log(data);
          this.student=data;
          console.log(this.student);
        },(err:any)=>{   
          alert("Internal Server Error");
        }
      )
    }
  }


