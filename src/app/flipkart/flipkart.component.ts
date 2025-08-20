import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  products: any = [
    { ProductName: 'pen', Price: 10, Rating: 3, FreeDelivery: 'true' },
     { ProductName: 'phone', Price: 100, Rating: 2, FreeDelivery: 'false' },
       { ProductName: 'Shirt', Price: 400, Rating: 4, FreeDelivery: 'true' },
         { ProductName: 'Cap', Price: 200, Rating: 5, FreeDelivery: 'false' },
           { ProductName: 'Mobile Case', Price: 300, Rating: 2, FreeDelivery: 'true' },
             { ProductName: 'Remote', Price: 400, Rating: 2.5, FreeDelivery: 'false' },];

             delete(index:number){
    this.products.splice(index,1);
  }
  sort(){
    this.products.sort((a:any,b:any)=>a.Price-b.Price);
 
  }
  app(){
    
    this.products.sort((a:any,b:any)=>b.Price-a.Price);
  }
    ball(){
    
    this.products.sort((a:any,b:any)=>a.Rating-b.Rating);
  }
  bat(){
    
    this.products.sort((a:any,b:any)=>b.Rating-a.Rating);
  }
  cat(){
     
    this.products=this.products.map((ProductName:any)=>{
      ProductName.Price=ProductName.Price/2;
      return ProductName;
    }); 
    
  }
  dog(){
    
    this.products=this.products.map((ProductName:any)=>{
      ProductName.Price=ProductName.Price+15;
      return ProductName;
    });
    
  }
  egg(){
    var totalCost=this.products.reduce((sum:any,product:any)=>sum+product.Price,0); //we can take any name instea of product
    alert(totalCost);
    
  }
  ice(){
    
  }
  free(){

  }
  
  Name:string='';
  Price:number=0;
  Rating:number=0;
  
  addtocart(){
    var items={
      name:this.Name,
      price:this.Price,
      rating:this.Rating,
      
    }
    this.products.unshift(items);
  }
  

  

  }


