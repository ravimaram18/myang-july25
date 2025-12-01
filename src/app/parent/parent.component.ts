import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  count:number=0;

 //CATCHING EVENT OF CHILD COMPONENT
  updateCount(value:number){
    this.count=value;
  }

  //CATCHING EVENT OF TEXTAREA
  catchMessage(value:string){
    console.log(value);
  }

}
