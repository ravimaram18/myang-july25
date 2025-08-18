import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  // isDataPresent:Boolean=true;
  // image_url:string="https://thumbs.dreamstime.com/z/illustration-congratulations-wording-celebrati-14571078.jpg";
  // name:string='Ravi';
  // age:number=27;
  // mobile:string='+91';
  // greeting(){
  //   alert("Hellooooooooo");
  // }

  // typing(){
  //   alert(this.mobile);
  // }

  // fruits(){
  //   alert("fruits changed!")
  // }
  num1:number=0;
  num2:number=0;
  sum:number=0;
  addition(){
    this.sum=this.num1+this.num2;
    console.log(this.sum);
  }


}
