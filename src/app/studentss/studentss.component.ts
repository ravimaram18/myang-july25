import { Component } from '@angular/core';
import { StudentssService } from '../studentss.service';

@Component({
  selector: 'app-studentss',
  templateUrl: './studentss.component.html',
  styleUrls: ['./studentss.component.css']
})
export class StudentssComponent {

  students:any[]=[];
    constructor(private student:StudentssService){    
        student.getstudent().subscribe(
          (data:any)=>{ 
            console.log(data);
            this.students=data;
            console.log(this.student);
          },(err:any)=>{   
            alert("Internal Server Error");
          }
        )
      }
}
