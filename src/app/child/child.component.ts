import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() con:number=0;


// creating EVENT
 @Output() conChange:EventEmitter<number>=new EventEmitter();

 //EMITING EVENT
 add(){
  this.con++ // for child and parent upadte simultaneously 
  this.conChange.emit(this.con);
 }

}
