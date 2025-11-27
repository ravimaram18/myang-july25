import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){}
  logout(){
    //delete token in browser
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
