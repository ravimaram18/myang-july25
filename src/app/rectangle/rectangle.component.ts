import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  Base:number=0;
Height:number=0;
  result:number=0;

  area(){
    this.result=this.Base*this.Height;
  }
  perimeter(){
    this.result= 2*(this.Height+this.Base)
}

}
