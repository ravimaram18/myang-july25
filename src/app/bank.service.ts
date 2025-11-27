import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private httpClient:HttpClient) { }
  getBanks(){
     return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');
  }

  getBank(id:any){
     return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id);
  }

 
  createBank(bank:any){
     return this.httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals',bank);
  }


updateBank(bank:any, id:string){
     return this.httpClient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id,bank);
  }

  deleteBanks( id:any){
     return this.httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id);
  }
}
